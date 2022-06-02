from django.contrib.auth.base_user import BaseUserManager

from rest_framework.authtoken.models import Token
from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save


from django.db import models

from django.contrib.auth.models import AbstractBaseUser, UserManager, PermissionsMixin



class UserManager(BaseUserManager):
    def create_user(self, phone, name, password):
        if phone is None:
            raise TypeError('Users must have an Email Address!')

        user = self.model(phone=phone, name=name)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, phone, password):
        if password is None:
            raise TypeError('Superusers must have a password!')

        user = self.create_user(phone=phone, password=password, name="Admin")
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user

class User(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=200, blank=True, null=True)
    email = models.EmailField(db_index=True, unique=True, null=True, blank=True)
    phone = models.CharField(max_length=20, unique=True)
    google_id = models.CharField(max_length=200, blank=True, null=True)
    is_seller = models.BooleanField(default=False, null=True, blank=True)
    is_phone_verified = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'phone'

    objects = UserManager()

    def __str__(self):
        return self.phone

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)



class OTPVerification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    otp = models.CharField(max_length=6)

    def __str__(self):
        return self.user.name






class UserProfile(models.Model):
    company = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    seller_type = models.CharField(max_length=100)
    ecommerce_store_address = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='profile_user')

    def __str__(self) -> str:
        return self.company



class KYC1(models.Model):
    pan = models.CharField(max_length=50)
    aadhar = models.CharField(max_length=50)
    gstin = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='kyc1_user')

    def __str__(self) -> str:
        return str(self.user.name)


class BankDetails(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bank_user')
    bank_name = models.CharField(max_length=50)
    account_number = models.CharField(max_length=50)
    ifsc_code = models.CharField(max_length=50)
    branch_name = models.CharField(max_length=50)
    account_holder_name = models.CharField(max_length=50)
    cancelled_cheque = models.FileField(upload_to='cancelled_cheque/')
    is_verified = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.bank_name


class BankAccounts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bank_accounts_user')
    accounts = models.ManyToManyField(BankDetails, related_name='bank_accounts')

    def __str__(self) -> str:
        return str(self.user.name)


class PrimaryAddressDetails(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='primary_addresses_user')
    address_line_1 = models.CharField(max_length=100)
    address_line_2 = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    pincode = models.CharField(max_length=50)
    landmark = models.CharField(max_length=50)
    address_type = models.CharField(max_length=50)
    is_verified = models.BooleanField(default=False)


class PrimaryAddresses(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='primary_addresses_user')
    addresses = models.ManyToManyField(PrimaryAddressDetails, related_name='primary_address_details')

    def __str__(self) -> str:
        return str(self.user.name)


class KYC2(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='kyc2_user')
    addresses = models.ManyToManyField(PrimaryAddresses, related_name='kyc2_addresses')

    def __str__(self) -> str:
        return str(self.user.name)


class KYC3(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='kyc3_user')
    bank_accounts = models.ManyToManyField(BankAccounts, related_name='kyc3_bank_accounts')

    def __str__(self) -> str:
        return str(self.user.name)