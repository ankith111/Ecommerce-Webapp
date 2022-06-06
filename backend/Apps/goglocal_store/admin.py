from django.contrib import admin

from .models import LanguageCountryRelation, MajorPaymentGateway, GlocalStoreHome, DomainServiceProvider, StoreManagement

admin.site.register(LanguageCountryRelation)
admin.site.register(MajorPaymentGateway)
admin.site.register(GlocalStoreHome)
admin.site.register(DomainServiceProvider)
admin.site.register(StoreManagement)