import json 
import os
import random
import subprocess
from colorama import init
from colorama import Fore

from PrintTraining import PrintTraining


# colorama
init()

class ContinueTraining:

    def record_read(self, name, value, flag):
        if flag == 'record':
            with open(f'./file_json/{name}.json', 'w') as file:
                return json.dump(value, file, sort_keys=True, indent=2, ensure_ascii=False)
        elif flag == 'read':
            with open(f'./file_json/{name}.json', 'r') as file:
                return json.load(file)

    def create_lists(self):
        '''Creates the right file if they are not'''

        if not os.path.isfile('./file_json/gussed_words.json'):
            self.record_read('gussed_words', [], 'record')

        if not os.path.isfile('./file_json/count_words.json'):
            self.record_read('count_words', [], 'record')

    def count_words(self):
        '''Creates json with the words that you need to guess'''

        word_list = []
        number = 0

        # We get a cumulative list for guessed words
        gussed_words = self.record_read('gussed_words', None, 'read')
        # We get the settings
        number_word = self.record_read('settings', None, 'read')['number_word']
        # We get all the words
        my_dict = self.record_read('my_dict', None, 'read')
        # Temporary base of words
        count_words = self.record_read('count_words', None, 'read')

        if len(count_words) == 0:
            while len(word_list) <= number_word:
                if my_dict[number] not in gussed_words:
                    append_dict = my_dict[number]
                    append_dict['status'] = 0
                    word_list.append(append_dict)
                number += 1
            self.record_read('count_words', word_list, 'record')
            return word_list
        else:
            return count_words
            
    def random_list_and_true_word(self):

        right_word = self.record_read('count_words', None, 'read')[-1]
        my_dict = self.record_read('my_dict', None, 'read')
        without_right_word = [md for md in my_dict if md['en_word'] != right_word['en_word']]
        random_word = random.sample(without_right_word, 3)

        return right_word, random_word

    def tests(self, right_word, random_word):

        # We get a list of tests
        list_test = random.sample([rw['en_word'] for rw in random_word] + [right_word['en_word']], 4)
        
        subprocess.run('clear', shell=True)
        print('*'*80)
        print()
        print(Fore.LIGHTYELLOW_EX+' -->', Fore.GREEN+ '[', str(right_word['ru_word']), ']')
        print()
        print(Fore.LIGHTYELLOW_EX+' -->', Fore.WHITE+'1 -', Fore.LIGHTMAGENTA_EX+list_test[0])
        print(Fore.LIGHTYELLOW_EX+' -->', Fore.WHITE+'2 -', Fore.LIGHTMAGENTA_EX+list_test[1])
        print(Fore.LIGHTYELLOW_EX+' -->', Fore.WHITE+'3 -', Fore.LIGHTMAGENTA_EX+list_test[2])
        print(Fore.LIGHTYELLOW_EX+' -->', Fore.WHITE+'4 -', Fore.LIGHTMAGENTA_EX+list_test[3])
        print()

        try:
            result_user = int(input(Fore.LIGHTBLUE_EX+f'Выберите вариант {Fore.WHITE}'))
            if list_test[result_user-1] == right_word['en_word']:
                return True
            else:
                subprocess.run('clear', shell=True)
                print(Fore.RED+'*'*80)
                print()
                print(Fore.RED+'ВАШ ОТВЕТ НЕ ВЕРНЫЙ!!!')
                print()
                input(Fore.LIGHTGREEN_EX+'Нажмите Enter чтобы продолжить')
        except Exception:
            subprocess.run('clear', shell=True)
            print(Fore.RED+'Вы можете ввести только 1, 2, 3 или 4')
            print()
            input(Fore.GREEN+'Нажмите Enter чтобы продолжить')


ContinueTraining().create_lists()
count_words = ContinueTraining().count_words()
while True:
    right_word, random_word = ContinueTraining().random_list_and_true_word()
    if ContinueTraining().tests(right_word, random_word):
        PrintTraining(right_word['en_word'], right_word['ru_word'], count_words).training()