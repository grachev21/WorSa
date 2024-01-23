from progress.bar import IncrementalBar
from record_read import record_read


def load():

    sum_status = len([record_read('count_words', None, 'read')][0])
    loop = record_read('loop', None, 'read')['number_loop']

    base_sum = sum([rr['status'] for rr in record_read('count_words', None, 'read')])
    max_value = (sum_status * loop)  

    value = (sum_status * loop) - base_sum


    bar = IncrementalBar('Осталось набрать слов', max = max_value)
    bar.next(max_value - value)