from functools import total_ordering
from django.db import models


from Apps.user.models import User


class Strategies(models.Model):
    name = models.CharField(max_length=100)
    details = models.TextField()
    price = models.FloatField(default=0)
    price_currency = models.CharField(max_length=100)
    country = models.CharField(max_length=100)



class PurchaseStrategies(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="purchase_user")
    strategies = models.ManyToManyField(Strategies, related_name="strategies")
    total_price = models.FloatField(default=0)
    price_currency = models.CharField(max_length=100)