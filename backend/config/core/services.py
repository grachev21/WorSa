import inflect
from .models import WordsList 


def dictionary_option(data, words):
    p = inflect.engine()
    result = []
    for word in words:
        if data['minusTwo'] and len(word) == 1:
            pass
        elif data['minusTree'] and len(word) == 2:
            pass
        elif data['minusPlural'] and p.singular_noun(word):
            result.append(p.singular_noun(word))
        else:
            result.append(word)

    return result


def create_dict(data):
    # print(data)
    out_list = []

    list_words = set([response for response in data['text'].lower().split(' ') if response.isalpha()])

    words = set(dictionary_option(data, list_words))


    for word in words:
        if WordsList.objects.filter(en=word).exists():
            objectj_db = WordsList.objects.get(en=word)
            out_list.append({'name': data['name'], 'en': objectj_db.en, 'ru': objectj_db.ru, 'audio': objectj_db.audio, 'audioSlow': objectj_db.audioSlow })

    for out in out_list:
        print(out)