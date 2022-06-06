from django.urls import path

from rest_framework.authtoken.views import obtain_auth_token

from .views import RegisterationView, VerifyOTPView, LoginView, GenerateOtpView

urlpatterns = [
    path('register/', RegisterationView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('verify_otp/', VerifyOTPView.as_view(), name='verify'),
    path('generate_otp/', GenerateOtpView.as_view(), name='generate_otp'),
]