from rest_framework import serializers
from .models import WordsList, Settings


class WordsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WordsList
        fields = '__all__'
        # or replace in -> fields = ('en', 'ru', 'time_create', 'time_update')

class SettingsSerializer(serializers.ModelSerializer):

    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Settings
        fields = '__all__'
