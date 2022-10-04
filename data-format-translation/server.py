from parse_files import parse_csv, parse_json, parse_txt, parse_xml, parse_yaml
from fastapi import FastAPI
import uvicorn
app = FastAPI(debug=True)

@app.get('/files')
def parse_and_read_files():
    _csv = parse_csv()
    _json = parse_json()
    _txt = parse_txt()
    _xml = parse_xml()
    _yaml = parse_yaml()
    return {
        'files': {
            'csv': _csv,
            'json': _json, 
            'txt': _txt,
            'xml': _xml,
            'yaml': _yaml
        }
    }

if __name__ == '__main__':
    uvicorn.run(app, port=8001, debug=True)