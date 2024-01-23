import json 
from record_read import record_read


def count_print():
    sum_status = len([record_read('count_words', None, 'read')][0])
    loop = record_read('loop', None, 'read')['number_loop']

    base_sum = sum([rr['status'] for rr in record_read('count_words', None, 'read')])
    value = (sum_status * loop) - base_sum

    return value

