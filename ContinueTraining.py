import os
import random
import subprocess
from colorama import init
from colorama import Fore

from record_read import record_read

# colorama
init()


class ContinueTraining:

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
        gussed_words = record_read('gussed_words', None, 'read')
        # We get the settings
        number_word = record_read('settings', None, 'read')['number_word']
        # We get all the words
        my_dict = record_read('my_dict', None, 'read')
        # Temporary base of words
        count_words = record_read('count_words', None, 'read')

        if len(count_words) == 0:
            while len(word_list) <= number_word:
                if my_dict[number] not in gussed_words:
                    append_dict = my_dict[number]
                    append_dict['status'] = 0
                    word_list.append(append_dict)
                number += 1
            record_read('count_words', word_list, 'record')
            return word_list
        else:
            return count_words

    def random_list_and_true_word(self):
        if len(record_read('count_words', None, 'read')) != 0:

            right_word = random.sample(record_read('count_words', None, 'read'), 1)[0]
            my_dict = record_read('my_dict', None, 'read')
            without_right_word = [md for md in my_dict if md['en_word'] != right_word['en_word']]
            random_word = random.sample(without_right_word, 3)
            return (right_word, random_word)
        else:
            return 'exit'

    def tests(self, right_word, random_word):

        # We get a list of tests
        list_test = random.sample([rw['en_word'] for rw in random_word] + [right_word['en_word']], 4)

        subprocess.run('clear', shell=True)

        message = []
        count = 1
        for lt in list_test:
            message.append(f"{Fore.LIGHTYELLOW_EX}--> {Fore.WHITE} {count} - {Fore.LIGHTMAGENTA_EX}{lt}")
            count += 1

        print(Fore.WHITE + '*' * 80)
        print(Fore.RED + 'Всего слов: ', len(record_read('my_dict', None, 'read')))
        print(Fore.RED + 'Выучено: ', len(record_read('gussed_words', None, 'read')))
        print(Fore.RED + 'Осталось за день: ', len(record_read('count_words', None, 'read')))
        print(Fore.RED + 'Настройки слов: ', (record_read('settings', None, 'read')['number_word']))
        print(Fore.RED + 'Количество повторов набора текста: ', (record_read('loop', None, 'read')['number_loop']))
        print(Fore.RED + 'Осталось выучить: ', len(record_read('my_dict', None, 'read')) - len(record_read('gussed_words', None, 'read')))

        print(Fore.RESET + '*' * 80)
        print(Fore.YELLOW + "Чтобы выйти введите '0'\n\n")
        print(f"{Fore.LIGHTYELLOW_EX}--> {Fore.GREEN} [{right_word['ru_word']}]")
        print()
        for me in message:
            print(me)

        try:
            result_user = int(input(Fore.LIGHTBLUE_EX + f'\nВыберите вариант:  {Fore.WHITE}'))
            if result_user == 0:
                return 'exit'
            if list_test[result_user - 1] == right_word['en_word']:
                return 'right'
            else:
                subprocess.run('clear', shell=True)
                print(Fore.RED + '*' * 80)
                print()
                print(Fore.RED + 'ВАШ ОТВЕТ НЕ ВЕРНЫЙ!!!')
                print()
                print(Fore.LIGHTYELLOW_EX + 'Правильное слово: ', Fore.WHITE + right_word['en_word'])
                print()
                input(Fore.LIGHTGREEN_EX + 'Нажмите Enter чтобы продолжить: ')
        except:
            subprocess.run('clear', shell=True)
            print(Fore.RED + 'Вы можете ввести только 1, 2, 3 или 4')
            print()
            input(Fore.GREEN + 'Нажмите Enter чтобы продолжить')



