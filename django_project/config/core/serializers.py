from rest_framework import serializers
from .models import WordsList


# class WordsListSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = WordsList
#         fields = ('en', 'ru')

class WordsListSerializer(serializers.Serializer):
    en = serializers.CharField(max_length=200)
    ru = serializers.CharField(max_length=200)