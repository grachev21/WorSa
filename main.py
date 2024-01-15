import subprocess
import time
import tqdm
import json
from art import tprint
from colorama import init
from colorama import Fore

from menu import Menu
from GetList import GetList

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
            pass
        elif value == 3:
            pass
        elif value == 4:
            pass
        elif value == 5:
            pass
        elif value == 6:
            subprocess.run('clear', shell=True)
            exit()


if '__main__' == __name__:
    main()
