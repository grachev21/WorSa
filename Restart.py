import subprocess
from record_read import record_read
class Restart:

    def restart(self):

        while True:
            subprocess.run('clear', shell=True)
            print('Назад q')
            check = input('Вы действительно хотите удалить данные? \nЕсли да то введите yes: ')
            if check == 'yes':
                record_read('count_words', [], 'record')
                record_read('gussed_words', [], 'record')
                break
            elif check == 'q':
                break
