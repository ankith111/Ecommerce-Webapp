from django.urls import path
from .views import AddVisitorView

urlpatterns = [
    path('', AddVisitorView.as_view(), name='AddVisitorView')
]