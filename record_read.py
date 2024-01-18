import json 


def record_read(name, value, flag):
    if flag == 'record':
        with open(f'./file_json/{name}.json', 'w') as file:
            return json.dump(value, file, sort_keys=True, indent=2, ensure_ascii=False)
    elif flag == 'read':
        with open(f'./file_json/{name}.json', 'r') as file:
            return json.load(file)