from rest_framework import serializers
from .models import WordsList

class WordsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WordsList
        fields = ('en', 'ru')