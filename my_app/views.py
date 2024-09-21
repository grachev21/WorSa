from django.shortcuts import render
from django.views.generic import ListView
from django.http import JsonResponse
from .models import StoryWords



class Index(ListView):
    model = StoryWords
    template_name = 'index.html'
    context_object_name = 'words_counter_home'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'WorSa'
        return context



def test_ajax_request(request):
    storywords = StoryWords.objects.all()
    response_data = {}

    if request.POST.get('action') == 'post':
        ru = request.POST.get('ru')
        en = request.POST.get('en')
        transcription = request.POST.get('transcription')
        offer = request.POST.get('offer')


        response_data['ru'] = ru
        response_data['en'] = en
        response_data['transcription'] = transcription
        response_data['offer'] = offer

        StoryWords.objects.create(ru=ru, en=en, transcription=transcription, offer=offer)

        return JsonResponse(response_data)
    
    return render(request, 'test_ajax_request.html', {'storywords': storywords})
