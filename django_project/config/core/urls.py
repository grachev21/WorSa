from .views import WordsListAPIView 
from django.urls import path 

urlpatterns = [
    path('api/words_list/', WordsListAPIView.as_view())
]