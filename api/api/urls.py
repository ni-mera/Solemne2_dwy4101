from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from planes import urls

urlpatterns = [
    path('planes/', include('planes.urls')),
    path('admin/', admin.site.urls),
]
