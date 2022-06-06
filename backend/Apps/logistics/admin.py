from django.contrib import admin

from .models import Sender, Receiver, Package



admin.site.register(Sender)
admin.site.register(Receiver)
admin.site.register(Package)