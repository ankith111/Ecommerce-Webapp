from rest_framework.decorators import APIView
from .models import Visitor, Dashboard
from datetime import datetime, date
from rest_framework.response import Response


class AddVisitorView(APIView):

    def post(self, request):

        currentIpAddress = self.POST['ipAddress']
        currentCountry = self.POST['country']
        currentTime = datetime.now()

        try:
            visitorWithSameIpAddress = Visitor.objects.get(ipAddress = currentIpAddress)
            timeDifference = currentTime - visitorWithSameIpAddress.visitingTime
            differenceInHours = timeDifference.total_seconds()//(60*60)

            if differenceInHours >= 4:
                visitorWithSameIpAddress.visitingTime = currentTime
                visitorWithSameIpAddress.save()
            else:
                return Response('Same visitor visited earlier within 4 hours')
        
        except:
            visitorWithSameIpAddress = Visitor(ipAddress=currentIpAddress, visitingTime=currentTime)
            visitorWithSameIpAddress.save()

        try:
            dashboard = Dashboard.objects.get(country=currentCountry, date=date.now())

        except:
            dashboard = Dashboard(country=currentCountry, date=date.now())
                
        dashboard.totalVisitors += 1
        dashboard.save()

        return Response('Success')