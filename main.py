import subprocess
import time
from art import tprint
from colorama import init
from colorama import Fore

from menu import Menu
from GetList import GetList
from settings import Settings
from ContinueTraining import ContinueTraining
from Restart import Restart
from PrintTraining import PrintTraining

# colorama
init()


def main():

    # Tilte
    subprocess.run('clear', shell=True)
    tprint('WorSa')
    time.sleep(1)
    subprocess.run('clear', shell=True)

    # Menu
    while True:

        subprocess.run('clear', shell=True)
        value = Menu().StartMenu()

        if value == 1:
            subprocess.run('clear', shell=True)
            list_word = GetList().get_list()
            if list_word == 'back':
                continue
            else:
                GetList().parsing_terminal(list_word)
        elif value == 2:
            try:
                Restart().restart()
            except KeyboardInterrupt:
                pass
        elif value == 3:

            ContinueTraining().create_lists()
            count_words = ContinueTraining().count_words()
            while True:
                # right_word, random_word = ContinueTraining().random_list_and_true_word()
                data = ContinueTraining().random_list_and_true_word()
                if data == 'exit':
                    break
                check = ContinueTraining().tests(data[0], data[1])
                if check == 'right':
                    PrintTraining(data[0]['en_word'], data[0]['ru_word'], count_words).training()
                if check == 'exit':
                    break

        elif value == 4:
            while True:
                try:
                    subprocess.run('clear', shell=True)
                    Settings().settings()
                    break
                except ValueError:
                    subprocess.run('clear', shell=True)
                    input('Вводить можно тлько цифры Enter')
                except KeyboardInterrupt:
                    break
        elif value == 5:
            subprocess.run('clear', shell=True)
            exit()


if '__main__' == __name__:
    main()
