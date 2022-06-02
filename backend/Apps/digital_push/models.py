from locale import currency
from django.db import models

from Apps.user.models import User

import uuid


class Services(models.Model):
    name = models.CharField(max_length=100)
    details = models.TextField()
    country = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    currency = models.CharField(max_length=100, default='USD')

    def __str__(self) -> str:
        return self.name


class PurchaseService(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, unique=True)
    services = models.ManyToManyField(Services, related_name='services')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='purchase_service_user')
    total_price = models.IntegerField(default=0)

    def __str__(self) -> str:
        return str(self.uuid)



class SetupDigitalPush(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='setup_digital_push_user')
    categories_of_the_product_you_sell = models.CharField(max_length=100)
    brand_plans_for_future = models.CharField(max_length=100)
    which_digital_marketing_activities_your_company_does = models.CharField(max_length=200)
    keywords_you_have_identified = models.CharField(max_length=200)
