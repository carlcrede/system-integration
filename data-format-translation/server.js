import express from "express";
import parser from '../1_file_types/parse_files.js';

const app = express();

app.get('/files', async (req, res) => {
    const _txt = parser.parseTXT();
    const _csv = await parser.parseCSV();
    const _yaml = parser.parseYAML();
    const _json = parser.parseJSON();
    const _xml = parser.parseXML();

    res.send({ _txt, _csv, _yaml, _json, _xml });
});

const server = app.listen(8002, (err) => {
    if (err) {
        console.error(err);  
    } else {
        console.log('server running on port=', server.address().port);
    };
});