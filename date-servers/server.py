from fastapi import FastAPI
import datetime, uvicorn

app = FastAPI(debug=True)

@app.get('/timestamp')
def _():
    timestamp = datetime.datetime.now().isoformat()
    return { 'Timestamp (ISO 8601)': timestamp }

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8001)