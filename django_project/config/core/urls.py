from .views import api_words_list
from django.urls import path 

urlpatterns = [
    path('api/words_list/', api_words_list)
]