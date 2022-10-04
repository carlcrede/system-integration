import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({host: 'localhost', port: 8082});

wss.on('connection', ws => {
    ws.on('message', data => {
        console.log(`Received message: ${data}`);
    });
});