from gtts import gTTS
import os
from playsound import playsound

def sound(text):
    '''sound <-- text, name'''

    if not os.path.isfile(f'./sound/{text}.mp3'):
        audio = gTTS(text=text, lang="en", slow=False)
        audio.save(f'./sound/{text}.mp3')

    playsound(f'./sound/{text}.mp3', block=False)

