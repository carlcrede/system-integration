import logging

import azure.functions as func
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def root():
    return {'message': 'Hello World'}

@app.get('/greet/{name}')
def greet(name: str):
    return {'message': f'Hello {name}'}

def main(req: func.HttpRequest, context: func.Context) -> func.HttpResponse:
    return func.AsgiMiddleware(app).handle(req, context)
