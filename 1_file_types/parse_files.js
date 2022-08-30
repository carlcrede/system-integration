const fs = require('fs');
const Papa = require('papaparse');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');
const yaml = require('js-yaml')

const parseCSV = async () => {
    const p = path.resolve('me.csv');
    const file = fs.readFileSync(p, 'utf-8');
    
    const res = Papa.parse(file, {
        dynamicTyping: true,
        header: true
    });
    return res.data;
};

const parseJSON = () => {
    const p = path.resolve(__dirname, 'me.json');
    const file = fs.readFileSync(p);
    const parsedJSON = JSON.parse(file);
    return parsedJSON;
};

const parseXML = () => {
    const p = path.resolve(__dirname, 'me.xml');
    const file = fs.readFileSync(p, { encoding: 'utf-8' });
    const parser = new XMLParser();
    const parsedXML = parser.parse(file);
    return parsedXML;
};

const parseTXT = () => {
    const p = path.resolve(__dirname, 'me.txt');
    const file = fs.readFileSync(p, { encoding: 'utf-8' });
    
    let obj = {};
    const lines = file.split('\n');
    lines.forEach(line => {
        const _line = line.trim().split('=');
        if (_line[1].split(',').length > 1) {
            obj[_line[0]] = _line[1].split(',');
        } else {
            obj[_line[0]] = _line[1];
        }
    });
    return obj;
};

const parseYAML = () => {
    const p = path.resolve(__dirname, 'me.yaml');
    const parsedYAML = yaml.load(fs.readFileSync(p, 'utf-8'));
    return parsedYAML;
};
console.log(__dirname)
console.log(parseTXT())