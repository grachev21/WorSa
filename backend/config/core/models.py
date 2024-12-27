from django.db import models
from users.models import CustomUser

class Categories(models.Model):
    letter = models.CharField(max_length=200)
    def __str__(self):
        return str(self.letter)

class WordsList(models.Model):
    en = models.CharField(max_length=200)
    ru = models.CharField(max_length=200)
    timeCreate = models.DateTimeField(auto_now_add=True)
    timeUpdate = models.DateTimeField(auto_now=True)
    audio = models.FileField(upload_to='audio/')
    audioSlow = models.FileField(upload_to='audio/')
    categories = models.ForeignKey(Categories, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.en)

class UserWordsList(models.Model):
    en = models.CharField(max_length=200)
    ru = models.CharField(max_length=200)
    repetitions = models.IntegerField(verbose_name="количество повторов")
    geeks_field = models.BooleanField(verbose_name="знаю или нет")
    timeCreate = models.DateTimeField(auto_now_add=True)
    timeUpdate = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.en)

class Settings(models.Model):
    numberWordsDay = models.IntegerField(default=20, verbose_name="количество за день")
    amountInputText = models.IntegerField(default=10, verbose_name="количество ввода текста")
    numberOptionsGuessing = models.IntegerField(default=8, verbose_name="количесво вариантов при угадывании")
    voiceoverWords = models.BooleanField(default=True, verbose_name='озвучка')
    voiceSpead = models.BooleanField(default=False, verbose_name='скорость озвучки')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)


class Graphs(models.Model):
    day = models.JSONField()
    week = models.JSONField()
    month = models.JSONField()
    year = models.JSONField()
    All = models.JSONField()