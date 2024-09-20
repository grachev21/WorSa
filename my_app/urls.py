from django.urls import path
from my_app import views

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    path('about/', views.About.as_view(), name='about'),
]
