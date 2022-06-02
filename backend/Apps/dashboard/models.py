from django.db import models


class Dashboard(models.Model):
    country = models.CharField(max_length=20, blank=True)
    date = models.DateField()
    totalOrders = models.IntegerField(default=0)
    totalVisitors = models.IntegerField(default=0)
    totalRevenue = models.IntegerField(default=0)


class Visitor(models.Model):
    ipAddress = models.CharField(max_length=50)
    visitingTime = models.DateTimeField()