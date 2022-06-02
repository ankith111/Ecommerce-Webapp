from rest_framework.serializers import ModelSerializer
from rest_framework import serializers

from .models import User


class RegisterationSerializer(ModelSerializer):

    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['phone', 'name', 'password', 'password2']

        extra_kwargs = {'password': {'write_only':True}}
    
    def save(self):

        user = User(
            name = self.validated_data['name'],
            phone = self.validated_data['phone']
        )

        password = self.validated_data['password']
        password2 = self.validated_data['password2']

        if password != password2:
            raise serializers.ValidationError({'password': "Passwords Must Match"})

        user.set_password(password)
        user.save()

        return user