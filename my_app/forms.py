from django import forms
from .models import StoryWords


class StoryWordsForm(forms.ModelForm):
    class Meta:
        model = StoryWords
        fields = '__all__'
