from rest_framework import serializers
from .models import WordsList, Settings, CustomUser, Categories

class CategorySerializer(serializers.ModelSerializer):
    model = Categories
    fields = ['id', 'letter']

class WordsListSerializer(serializers.ModelSerializer):
    # categories = CategorySerializer(many=True)

    class Meta:
        model = WordsList
        # fields = ['en', 'ru', 'audio', 'categories'] 
        fields = '__all__'

class SettingsSerializer(serializers.ModelSerializer):
    # user = serializers.SlugRelatedField(read_only=True, slug_field='CustomUser')
    # user = serializers.SlugRelatedField(read_only=True, slug_field='email')
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Settings
        fields = '__all__'
        read_only_fields = ['user']  # Указываем, что поле user является только для чтения (оно будет установлено автоматически)
        # extra_kwargs = {'user': {'read_only': True}}  # Убедитесь, что поле 'user' является только для чтения

        # fields = [
        #     'numberWordsDay',
        #     'amountInputText', 
        #     'numberOptionsGuessing',
        #     'voiceoverWords', 
        #     'voiceSpead',
        #     'id',
        #     'user',
        # ]



    # numberWordsDay = models.IntegerField()
    # amountInputText = models.IntegerField()
    # numberOptionsGuessing = models.IntegerField()
    # voiceoverWords = models.BooleanField()
    # voiceSpead = models.BooleanField()
    # user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)