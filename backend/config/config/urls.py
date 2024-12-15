from django.contrib import admin
from django.urls import path, include
from core.views import *
from django.urls import path
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"WorSa", WordsListSet)
print(router.urls, "<<<")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/w1/", include(router.urls)),
]
