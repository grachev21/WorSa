from core.views import *
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from config import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'WordsList', WordsListSet)
router.register(r'Settings', SettingsSet)

# for u in router.urls:
#     print(u)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/w1/", include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)