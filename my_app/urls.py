from django.urls import path
from my_app import views

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    path('test_ajax_request/', views.test_ajax_request, name='test_ajax'),
]
