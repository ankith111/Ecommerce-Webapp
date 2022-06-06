from django.contrib import admin

from .models import SetupDigitalPush, Services, PurchaseService


admin.site.register(SetupDigitalPush)
admin.site.register(Services)
admin.site.register(PurchaseService)