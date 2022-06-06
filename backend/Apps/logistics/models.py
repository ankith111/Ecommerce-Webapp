from django.db import models

from Apps.user.models import User




class Sender(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=200, null=True, blank=True)
    phone = models.CharField(max_length=200)
    address_line1 = models.CharField(max_length=1000)
    address_line2 = models.CharField(max_length=1000)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    pincode = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

    

class Receiver(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=200, null=True, blank=True)
    phone = models.CharField(max_length=200)
    address_line1 = models.CharField(max_length=1000)
    address_line2 = models.CharField(max_length=1000)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    pincode = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name


class Package(models.Model):
    sender = models.ForeignKey(Sender, on_delete=models.CASCADE)
    receiver = models.ForeignKey(Receiver, on_delete=models.CASCADE)
    description = models.TextField(null=True)
    service_type = models.CharField(max_length=200)
    weight = models.FloatField()
    length = models.FloatField()
    width = models.FloatField()
    height = models.FloatField()
    load_type = models.CharField(max_length=30)
    consignment_category = models.CharField(max_length=30)
    shipping_partner = models.CharField(max_length=200)
    price = models.FloatField(default=0)
    delivery_time = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)
