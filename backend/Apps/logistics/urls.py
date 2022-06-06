from ast import Sub
from django.urls import path

from .views import GetShippingPartners, Submit

urlpatterns = [
    path('get_shipping_partners', GetShippingPartners.as_view()),
    path('submit/', Submit.as_view()),
]