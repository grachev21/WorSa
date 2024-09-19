from django.urls import path
from coreapp import views

urlpatterns = [
    path('', views.Home.as_view(), name='home'),
]