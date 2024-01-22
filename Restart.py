import subprocess
from record_read import record_read
from colorama import init
from colorama import Fore

# colorama
init()

class Restart:

    def restart(self):

        while True:
            subprocess.run('clear', shell=True)
            print(Fore.WHITE + '*' * 80)
            print()
            print(Fore.LIGHTYELLOW_EX + "Назад 'q' или 'Ctl+c")
            print()
            check = input(f'{Fore.LIGHTRED_EX}Вы действительно хотите удалить данные? \n\n{Fore.LIGHTGREEN_EX}Если да то введите yes: {Fore.RED}')
            if check == 'yes':
                record_read('count_words', [], 'record')
                record_read('gussed_words', [], 'record')
                break
            elif check == 'q':
                break
