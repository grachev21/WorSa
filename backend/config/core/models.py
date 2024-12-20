from django.db import models
from users.models import CustomUser


class Categories(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return str(self.title)


class WordsList(models.Model):
    en = models.CharField(max_length=200)
    ru = models.CharField(max_length=200)
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    categories = models.ForeignKey(Categories, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.en)


class UserWordsList(models.Model):
    en = models.CharField(max_length=200)
    ru = models.CharField(max_length=200)
    repetitions = models.IntegerField(verbose_name="количество повторов")
    geeks_field = models.BooleanField(verbose_name="знаю или нет")
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.en)


class Settings(models.Model):
    numberWordsDay = models.IntegerField(verbose_name="количество за день")
    amountInputText = models.IntegerField(verbose_name="количество ввода текста")
    numberOptionsGuessing = models.IntegerField(verbose_name="количесво вариантов при угадывании")
    voiceoverWords = models.BooleanField(verbose_name='озвучка')
    transcriptions = models.BooleanField(verbose_name='транскрипция')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    



