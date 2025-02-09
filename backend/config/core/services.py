from .models import WordsList, UserWordsList 


def create_dict(data, user):

    def dictionary_option(data, words):
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

    out_list = []

    list_words = set([response for response in data['text'].lower().split(' ') if response.isalpha()])
    words = set(dictionary_option(data, list_words))

    for word in words:
        if WordsList.objects.filter(en=word).exists():
            objectj_db = WordsList.objects.get(en=word)
            out_list.append(
                {'name': data['name'], 
                 'en': objectj_db.en, 
                 'ru': objectj_db.ru, 
                 'audio': objectj_db.audio, 
                  }
                )

    
    for out in out_list:
        UserWordsList.objects.create(
                name=out['name'],
                en=out['en'],
                ru=out['ru'],
                audio=out['audio'],
                user=user,
        )

def cleaning_duplicates(user):
    seen = set()
    duplicates = []

    for obj in UserWordsList.objects.select_related('user').filter(user=user):
        identifier = (obj.en)
        if identifier in seen:
            duplicates.append(obj.id)
        else:
            seen.add(identifier)

    UserWordsList.objects.filter(id__in=duplicates).delete()
