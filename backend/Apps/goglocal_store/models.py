from django.db import models

from Apps.user.models import User





class LanguageCountryRelation(models.Model):
    lang_name = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    percent_users = models.FloatField(default=0)

    def __str__(self) -> str:
        return self.lang_name


class MajorPaymentGateway(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    percent_users = models.FloatField(default=0)

    def __str__(self) -> str:
        return self.name


class GlocalStoreHome(models.Model):
    country = models.CharField(max_length=50)
    payment_gateway = models.ForeignKey(MajorPaymentGateway, on_delete=models.CASCADE, related_name="payment_gateway")
    language = models.ForeignKey(LanguageCountryRelation, on_delete=models.CASCADE, related_name="language_country_relation")

    def __str__(self) -> str:
        return self.country + " " + str(self.language)


class DomainServiceProvider(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    redirection_link = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.name


class StoreManagement(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='store_management_user')
    domain_address = models.CharField(max_length=200)
    domain_provider = models.ForeignKey(DomainServiceProvider, on_delete=models.CASCADE, related_name="domain_service_provider")
    language = models.CharField(max_length=100)
    payment_gateway = models.CharField(max_length=100)
    shipment_partner = models.CharField(max_length=100)
    is_international = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.domain_address