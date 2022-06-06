from django.urls import path

from .views import CreateCatalog, GetCatalogs, GetProducts, AddProductManually, AddProductFromFile



urlpatterns = [
    path('create_catalog/', CreateCatalog.as_view()),
    path('get_catalog', GetCatalogs.as_view()),
    path('get_products', GetProducts.as_view()),
    path('add_product_manually/', AddProductManually.as_view()),
    path('add_product_from_file/', AddProductFromFile.as_view()),
]