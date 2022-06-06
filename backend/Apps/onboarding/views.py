from rest_framework.decorators import APIView
from rest_framework.response import Response

from Apps.onboarding.models import OnboardingAnswers, OnboardingCategories, OnboardingQuestionCategories, OnboardingQuestions



class GetCategory(APIView):
    
    def get(self, request):
        
        categories = OnboardingCategories.objects.all()

        return Response([{'name': category.name, 'image': category.image.url} for category in categories])




class GetQuestionCategories(APIView):

    def get(self, request):

        categories = OnboardingQuestionCategories.objects.all()

        categories = [category for category in categories]

        categories.sort(key=lambda x: x.order_no)

        return Response([category.name for category in categories])


class GetQuestionsByCategories(APIView):

    def get(self, request):

        category_name = request.GET['category']
        category = OnboardingQuestionCategories.objects.get(name=category_name)

        questions = OnboardingQuestions.objects.filter(category_question=category)

        questions = [question for question in questions]

        questions.sort(key=lambda x: x.order_no)

        return Response([{
                'uuid': question.uuid, 
                'question': question.question, 
                'image': question.image.url, 
                'options': [[option.uuid, option.option, option.is_correct] for option in question.options.all()],
            } for question in questions])


class SubmitAnswers(APIView):

    def post(self, request):
        company_name = request.data['company_name']
        answers = request.data['answers']

        for answer in answers:
            question = OnboardingQuestions.objects.get(uuid=answer['question_uuid'])
            options = []

            for option_uuid in answer['options_uuids']:
                options.append(OnboardingQuestions.objects.get(uuid=option_uuid))

            
            onboarding_answer = OnboardingAnswers.objects.create(company_name=company_name, question=question)
            onboarding_answer.answer.add(*options)
            onboarding_answer.save()

        return Response({'status': 'success'})