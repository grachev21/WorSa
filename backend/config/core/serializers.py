from rest_framework import serializers
from .models import WordsList, Settings, CustomUser, Categories

class CategorySerializer(serializers.ModelSerializer):
    model = Categories
    fields = ['id', 'letter']

class WordsListSerializer(serializers.ModelSerializer):
    # categories = CategorySerializer(many=True)

    class Meta:
        model = WordsList
        fields = ['en', 'ru', 'audio', 'categories'] 

class SettingsSerializer(serializers.ModelSerializer):

    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Settings
        fields = '__all__'
