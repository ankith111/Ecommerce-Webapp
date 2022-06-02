from math import prod
from rest_framework.views import APIView
from rest_framework.response import Response
from Apps.cataloging.models import Product, Catalog, ProductImages

from uuid import uuid4


class GetCatalogs(APIView):

    def get(self, request):
        """
        Returns a list of all catalogs
        """

        catalogs =  Catalog.objects.all()

        return Response(
            [
                {
                    'catalog_id' : catalog.catalog_id, 
                    'name': catalog.name, 
                    'description': catalog.description
                } for catalog in catalogs
            ])


class CreateCatalog(APIView):

    def post(self, request):

        """
        Creates a new catalog
        """

        catalog = Catalog.objects.create(
            catalog_id = str(uuid4()),
            name = request.data['name'],
            description = request.data['description'],
            owner = request.user
        )

        return Response({
            'catalog_id' : catalog.catalog_id, 
            'name': catalog.name, 
            'description': catalog.description
        })


class AddProductManually(APIView):

    def post(self, request):

        """
        Adds a product to a catalog
        """

        catalog = Catalog.objects.get(catalog_id=request.data['catalog_id'])

        product = Product.objects.create(
            product_id = str(uuid4()),
            name = request.data['name'],
            description = request.data['description'],
            owner = request.user,
            brand = request.data['brand'],
            price = request.data['price'],
            shape = request.data['shape'],
            color = request.data['color'],
            size = request.data['size']
        )

        product_images = request.data['images']

        for image in product_images:
            product_image = ProductImages(
                uuid = str(uuid4()),
                image = image,
                product = product
            )

            product_image.save()

            product.images.add(product_image)

        catalog.products.add(product)

        return Response({
            'product_id' : product.product_id, 
            'name': product.name, 
            'description': product.description
        })


# Status : TODO
class AddProductFromFile(APIView):

    def post(self, request):

        """
        Adds a product to a catalog
        """

        catalog = Catalog.objects.get(catalog_id=request.data['catalog_id'])





class GetProducts(APIView):

    def get(self, request):

        """
        Returns a list of all products
        """

        catalog_id = request.GET['catalog_id']
        catalog = Catalog.objects.get(catalog_id=catalog_id)
        
        filters = request.GET['filters']

        import json
        filters = json.loads(filters)

        price_range = filters['price']

        products = catalog.products.filter(**filters)

        return Response(
            [
                {
                    'product_id' : product.product_id, 
                    'name': product.name, 
                    'description': product.description
                } for product in products
            ])

