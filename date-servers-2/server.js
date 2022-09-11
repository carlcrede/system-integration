import express from 'express';

const app = express();

app.get('/timestamp', (req, res) => {
    const timestamp = new Date().toISOString();
    res.send({ 'Timestamp (ISO 8601)': timestamp });
});

const server = app.listen(8002, (err) => {
    if (err) {
        console.error(err);  
    } else {
        console.log('server running on port=', server.address().port);
    };
});