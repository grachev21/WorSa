from django.shortcuts import render
from django.views.generic import ListView
from .models import StoryWords



class Home(ListView):
    model = StoryWords
    template_name = 'home.html'
    context_object_name = 'words_counter_home'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
