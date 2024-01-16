import json

class Settings:

    def settings(self):
        number_word = int(input('Введите количество слов в день: '))

        to_jsone = {
            'number_word': number_word
        }
        with open('settings.json', 'w') as f:
            json.dump(to_jsone, f, sort_keys=True, indent=2, ensure_ascii=False)

