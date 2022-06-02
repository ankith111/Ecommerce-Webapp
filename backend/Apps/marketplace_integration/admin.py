from django.contrib import admin

from .models import MarketplaceIntegrationSetup, Marketplaces


admin.site.register(MarketplaceIntegrationSetup)
admin.site.register(Marketplaces)