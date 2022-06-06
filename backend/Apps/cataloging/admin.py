from django.contrib import admin

from .models import Catalog, Product, ProductImages, BuyerDetails

admin.site.register(Catalog)
admin.site.register(Product)
admin.site.register(ProductImages)
admin.site.register(BuyerDetails)
