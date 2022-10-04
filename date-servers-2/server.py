from fastapi import FastAPI
import datetime, uvicorn, requests

app = FastAPI(debug=True,)

@app.get('/timestamp')
def _():
    res = requests.get('http://127.0.0.1:8002/timestamp')
    data = res.json()
    return data

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8001, debug=True)