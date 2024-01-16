import subprocess
class Restart:

    def restart(self):

        while True:
            subprocess.run('clear', shell=True)
            print('Назад')
            check = input('Вы действительно хотите удалить данные? \nЕсли да то введите yes: ')
            if check == 'yes':
                open("file_json/count_words.json","w").close()
                break
            elif check == 'q':
                break
