from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import ListView
from django.views.generic.edit import CreateView, FormView
from .models import StoryWords
from .forms import StoryWordsForm


class Index(ListView):
    model = StoryWords
    template_name = 'index.html'
    context_object_name = 'words_counter_home'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'WorSa'
        return context


class TestAjaxRequest(FormView):
    template_name = 'test_ajax_request.html'
    form_class = StoryWordsForm

    def form_valid(self, form):
        # Если форма валидна, вернем код 200
        # вместе с именем пользователя

        en = form.cleaned_data['en']
        form.save()
        return JsonResponse({"en": en}, status=200)

    def form_invalid(self, form):
        # Если форма невалидна, возвращаем код 400 с ошибками.

        errors = form.errors.as_json()
        return JsonResponse({"errors": errors}, status=400)
