from ast import mod
from tkinter import CASCADE
from django.db import models
from users.models import CustomUser


class Categories(models.Model):
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class WordsList(models.Model):
    en = models.CharField(max_length=200)
    ru = models.CharField(max_length=200)
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)
    categories = models.ForeignKey(Categories, on_delete=models.CASCADE)

    def __str__(self):
        return self.en


class UserWordsList(models.Model):
    en = models.CharField(max_length=200)
    ru = models.CharField(max_length=200)
    repetitions = models.IntegerField(verbose_name="количество повторов")
    geeks_field = models.BooleanField(verbose_name="знаю или нет")
    time_create = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.en


class Settings(models.Model):
    numberWordsDay = models.IntegerField(verbose_name="количество слов в день")
    amountInputText = models.ImageField(verbose_name="количество ввода текста")
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
