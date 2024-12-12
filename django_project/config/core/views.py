# from django.http import JsonResponse 
from .models import WordsList
from .serializers import WordsListSerializer

from rest_framework import viewsets

class APIWordsList(viewsets.ModelViewSet):
    queryset = WordsList.objects.all()
    serializer_class = WordsListSerializer
            





