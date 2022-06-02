from re import S
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from Apps.logistics.custom_libs.get_shipping_partners import get_shipping_partners

from .models import Sender, Receiver, Package

class GetShippingPartners(APIView):

    def get(self, request):

        try:
            weight = float(request.GET['weight'])
            country = request.GET['country'].lower()

            result = get_shipping_partners(weight, country)
            return Response(result)

        except Exception as e:
            print(e)
            return Response({"error": "Something went wrong", "message": str(e)}, status=status.HTTP_400_BAD_REQUEST)





class Submit(APIView):

    def post(self, request):

        try:
            """
            Sender and Receiver Details format :

                {
                    first_name = String
                    last_name = String
                    email = String
                    phone = String
                    address_line1 = String
                    address_line2 = String
                    city = String
                    state = String
                    pincode = String
                    country = String
                }

            Package Details Format : 

                {
                    description = String
                    service_type = String
                    weight = Float
                    length = Float
                    width = Float
                    height = Float
                    load_type = String
                    consignment_category = String
                    shipping_partner = String
                    price = Float
                    delivery_time = Int
                }

            """

            if not request.user:
                return Response("Auth Token is required", status=status.HTTP_401_UNAUTHORIZED)

            sender_details = request.data['sender_details']
            receiver_details = request.data['receiver_details']
            package_details = request.data['package_details']

            sender = Sender(user=request.user, **sender_details)
            sender.save()

            receiver = Receiver(**receiver_details)
            receiver.save()

            package = Package(sender=sender, receiver=receiver, **package_details)
            package.save()

            return Response({"status": "success"})

        except Exception as e:
            print(e)
            return Response({"status": "failure", "message": str(e)}, status=status.HTTP_400_BAD_REQUEST)

