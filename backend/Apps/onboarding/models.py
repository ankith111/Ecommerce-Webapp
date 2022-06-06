from django.db import models

from Apps.user.models import User





class OnboardingCategories(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='onboarding/categories/')


class OnboardingOptions(models.Model):
    uuid = models.CharField(max_length=100)
    option = models.CharField(max_length=1000)
    is_correct = models.BooleanField(default=False)

class OnboardingQuestionCategories(models.Model):
    name = models.CharField(max_length=100)
    order_no = models.IntegerField(default=1)



class OnboardingQuestions(models.Model):
    uuid = models.CharField(max_length=100)
    order_no = models.IntegerField(default=0)
    question = models.CharField(max_length=1000)
    image = models.ImageField(upload_to='onboarding/questions/')
    options = models.ManyToManyField(OnboardingOptions, related_name='options')
    category_question = models.ForeignKey(OnboardingQuestionCategories, on_delete=models.CASCADE, related_name='category_question')



class OnboardingAnswers(models.Model):
    company_name = models.CharField(max_length=200, null=True, blank=True)
    question = models.ForeignKey(OnboardingQuestions, on_delete=models.CASCADE, related_name='onboarding_answers_question')
    answer = models.ManyToManyField(OnboardingOptions, related_name='onboarding_answers_answer', blank=True)
    