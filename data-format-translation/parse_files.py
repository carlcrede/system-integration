import yaml, csv, json, xmltodict
import os

yaml_file = os.path.join(os.getcwd(),'me.yaml')
csv_file = os.path.join(os.getcwd(),'me.csv')
json_file = os.path.join(os.getcwd(),'me.json')
xml_file = os.path.join(os.getcwd(),'me.xml')
txt_file = os.path.join(os.getcwd(),'me.txt')

def parse_yaml(file_path=yaml_file):
    with open(file=file_path, mode='r') as f:
        yaml_obj = yaml.load(f, yaml.Loader)
    return yaml_obj

def parse_csv(file_path=csv_file):
    parsed_csv = []
    with open(file=file_path, mode='r') as f:
        parsed_csv = [ row for row in csv.DictReader(f) ]
    return parsed_csv
            
def parse_json(file_path=json_file):
    with open(file=file_path, mode='r') as f:
        parsed_json = json.load(f)
        return parsed_json

def parse_xml(file_path=xml_file):
    with open(file_path, mode='r') as f:
        file = f.read()
        parsed_xml = xmltodict.parse(file)
        return parsed_xml

def parse_txt(file_path=txt_file):
    parsed_txt = {}
    with open(file_path, mode='r') as f:
        rows = [ r.strip() for r in f.readlines() ]
        for row in rows:
            row = row.split('=')
            if len(row[1].split(',')) > 1:
                parsed_txt[row[0]] = [ i for i in row[1].split(',') ]
            else:
                parsed_txt[row[0]] = row[1]
    return parsed_txt