from django.conf import settings
from django.urls import path
from django.conf.urls.static import static

from .views import GetCategory, GetQuestionCategories, GetQuestionsByCategories, SubmitAnswers


urlpatterns = [
    path('categories', GetCategory.as_view()),
    path('question_categories', GetQuestionCategories.as_view()),
    path('questions', GetQuestionsByCategories.as_view()),
    path('submit_answers/', SubmitAnswers.as_view()),
]