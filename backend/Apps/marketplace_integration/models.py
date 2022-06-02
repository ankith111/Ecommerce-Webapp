from django.db import models


from Apps.user.models import User


class Marketplaces(models.Model):
    name = models.CharField(max_length=100)
    url = models.CharField(max_length=200)
    details = models.TextField()
    country = models.CharField(max_length=100)
    no_of_buyers = models.IntegerField(default=0)
    total_visitors = models.IntegerField(default=0)
    terms_and_compliences = models.TextField()




class MarketplaceIntegrationSetup(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="mp_user_setup")
    countires = models.CharField(max_length=1000)
    marketplaces = models.ManyToManyField(Marketplaces, related_name="marketplaces")
    is_part_of_gsp = models.BooleanField(default=False)