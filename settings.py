import json
from record_read import record_read

class Settings:

    def settings(self):
        number_word = int(input('Введите количество слов в день: '))

        value = {
            'number_word': number_word
        }
        record_read('settings', value, 'record')

