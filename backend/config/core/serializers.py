from rest_framework import serializers
from .models import WordsList, Settings, Categories, UserWordsList

class CategorySerializer(serializers.ModelSerializer):
    model = Categories
    fields = ['id', 'letter']

class WordsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WordsList
        fields = '__all__'

class SettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Settings
        fields = '__all__'
        read_only_fields = ['user'] 

class UserWordsListSerializer(serializers.Serializer):
    name = serializers.CharField()
    text = serializers.CharField()
    minusTwo = serializers.BooleanField()
    minusTree = serializers.BooleanField()
    minusPlural = serializers.BooleanField()

    class Meta:
        model = UserWordsList
        fields = '__all__'
        read_only_fields = ['user'] 

class ShowUserWordsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserWordsList
        fields = '__all__'
        read_only_fields = ['user']