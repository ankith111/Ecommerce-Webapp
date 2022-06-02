from rest_framework.decorators import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status

from .serializers import RegisterationSerializer
from .models import OTPVerification, User

from django.contrib.auth import authenticate


class RegisterationView(APIView):

    def post(self, request):

        serializer = RegisterationSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            

            # if request.data.email: 
            #     user.email = request.data.email
            #     user.save()


            import random

            random_otp = str(random.randint(100000, 999999))

            OTPVerification.objects.filter(user=user).delete()

            otp = OTPVerification(user=user, otp=random_otp)
            otp.save()

            return Response({'phone': user.phone})
        
        else: 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerifyOTPView(APIView):
    
    def post(self, request):
        
        user_phone = request.data['phone']
        user_otp = request.data['otp']

        user = User.objects.get(phone=user_phone)
        token = Token.objects.get(user=user).key
        
        try:
            otp = OTPVerification.objects.get(user=user)
            
            if otp.otp == user_otp:
                user.is_phone_verified = True
                user.save()
                otp.delete()
                return Response({'token': token})
            else:
                return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)
        except OTPVerification.DoesNotExist:
            return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)



class GenerateOtpView(APIView):

    def post(self, request):
        user_phone = request.data['phone']
        user = User.objects.get(phone=user_phone)
        import random

        random_otp = str(random.randint(100000, 999999))

        OTPVerification.objects.filter(user=user).delete()

        otp = OTPVerification(user=user, otp=random_otp)
        otp.save()

        return Response({'phone': user.phone})



class LoginView(APIView):

    def post(self, request):
        
        phone = request.data['phone']
        password = request.data['password']

        user = authenticate(phone=phone, password=password)

        if user is not None:
            if user.is_phone_verified:
                token = Token.objects.get(user=user).key
                return Response({'token': token})
            else:
                return Response({'error': 'Phone number not verified'})
        else:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)