"""goglocal_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('dashboard/', include('Apps.dashboard.urls')),
    path('cataloging/', include('Apps.cataloging.urls')),
    path('marketplace_integration/', include('Apps.marketplace_integration.urls')),
    path('digital_push/', include('Apps.digital_push.urls')),
    path('support/', include('Apps.support.urls')),
    path('user/', include('Apps.user.urls')),
    path('goglocal_store/', include('Apps.goglocal_store.urls')),
    path('onboarding/', include('Apps.onboarding.urls')),
    path('logistics/', include('Apps.logistics.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
