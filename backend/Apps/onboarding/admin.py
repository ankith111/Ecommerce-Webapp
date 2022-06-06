from django.contrib import admin

from .models import OnboardingCategories, OnboardingAnswers, OnboardingOptions, OnboardingQuestionCategories, OnboardingQuestions


admin.site.register(OnboardingCategories)
admin.site.register(OnboardingAnswers)
admin.site.register(OnboardingOptions)
admin.site.register(OnboardingQuestionCategories)
admin.site.register(OnboardingQuestions)