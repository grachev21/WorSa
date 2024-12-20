from rest_framework import serializers
from .models import WordsList, Settings


class WordsListSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = WordsList
        fields = '__all__'
        # or replace in -> fields = ('en', 'ru', 'time_create', 'time_update')

class SettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Settings
        fields = '__all__'

# class WordsListSerializer(serializers.Serializer):
#     en = serializers.CharField(max_length=200)
#     ru = serializers.CharField(max_length=200)
#     time_create = serializers.DateTimeField(read_only=True)
#     time_update = serializers.DateTimeField(read_only=True)

#     def create(self, validated_data):
#         return WordsList.objects.create(**validated_data)

#     def update(self, instance, validated_data):
#         instance.en = validated_data.get("en", instance.en)
#         instance.ru = validated_data.get("ru", instance.ru)
#         instance.time_update = validated_data.get('time_update', isinstance.time_update)
#         instance.is_published = validated_data.get("is_published", instance.is_published)
#         instance.save()
#         return instance
