import json 
import os
# import random


class ContinueTraining:

    def record_read(self, name, value, flag):
        if flag == 'record':
            with open(f'./file_json/{name}.json', 'w') as file:
                return json.dump(value, file, sort_keys=True, indent=2, ensure_ascii=False)
        elif flag == 'read':
            with open(f'./file_json/{name}.json', 'r') as file:
                return json.load(file)

    def count_words(self):

        if not os.path.isfile('./file_json/gussed_words.json'):
            self.record_read('gussed_words', None, 'record')

        gussed_words = self.record_read('gussed_words', None, 'read')
        # Получаем настройки
        number_word = self.record_read('settings', None, 'read')['number_word']


        # Получаем все слова
        my_dict = self.record_read('my_dict', None, 'read')

        word_list = []
        number = 0
        while len(word_list) < number_word:
            
            if my_dict[number] not in 'none':
                word_list.append(my_dict[number])
            print('x')
            number += 1
        #     
        #
        #
        #
        # if not os.path.isfile('./file_json/count_words.json'):
        #     with open('./file_json/count_words.json', 'w') as f:
        #         json.dump(word_list, f, sort_keys=True, indent=2, ensure_ascii=False)
        # else:
        #     with open('./file_json/count_words.json', 'r') as count_words:
        #         pass


        # print(check)

        # with open('file_json/count_words.json', 'r') as file:
            # templates = json.load(file)
        # print(len(templates))


    def random_list(self):

        with open('file_json/my_dict.json', 'r') as file:
            templates = json.load(file)

        # print(templates)

        input('Выберите вариант: ')

        # random_word = random.randrange()


ContinueTraining().random_list()
ContinueTraining().count_words()
