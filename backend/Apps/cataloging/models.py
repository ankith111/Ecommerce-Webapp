from django.db import models

from Apps.user.models import User


class ProductImages(models.Model):
    uuid = models.CharField(max_length=255, unique=True)
    image = models.ImageField(upload_to='product_images/')




class Product(models.Model):
    product_id = models.CharField(max_length=100)
    name = models.CharField(max_length=255)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='product_owner')
    brand = models.CharField(max_length=10000)
    price = models.IntegerField(default=0)
    images = models.ManyToManyField(ProductImages, related_name='product_images')
    shape = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    size = models.CharField(max_length=255)



class BuyerDetails(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)


class Catalog(models.Model):
    catalog_id = models.CharField(max_length=100)
    name = models.CharField(max_length=255)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='catalog_owner')
    products = models.ManyToManyField(Product, related_name='catalog_products')
    buyer_details = models.ForeignKey(BuyerDetails, on_delete=models.CASCADE, related_name='catalog_buyer_details')