from django.shortcuts import render
from django.views.generic import ListView
from .models import DarkTheme



class Home(ListView):
    model = DarkTheme
    template_name = 'words/home.html'
    context_object_name = 'words_counter_home'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
