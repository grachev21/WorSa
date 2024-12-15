from django.contrib import admin
from .models import Categories, WordsList, UserWordsList, CustomUser, Settings

admin.site.register(Categories)
admin.site.register(WordsList)
admin.site.register(UserWordsList)
admin.site.register(CustomUser)
admin.site.register(Settings)
