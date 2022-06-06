from msilib.schema import PublishComponent
from django.contrib import admin

from .models import Strategies, PurchaseStrategies

admin.site.register(Strategies)
admin.site.register(PurchaseStrategies)