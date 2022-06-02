from django.contrib import admin

from .models import OTPVerification, User, UserProfile, KYC1, BankDetails, BankAccounts, PrimaryAddressDetails, PrimaryAddresses, KYC2, KYC3



admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(OTPVerification)
admin.site.register(KYC1)
admin.site.register(BankDetails)
admin.site.register(BankAccounts)
admin.site.register(PrimaryAddressDetails)
admin.site.register(PrimaryAddresses)
admin.site.register(KYC2)
admin.site.register(KYC3)
