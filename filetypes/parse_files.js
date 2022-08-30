import Papa from 'papaparse';
import path from 'path';
import {fileURLToPath} from 'url';
import { XMLParser } from 'fast-xml-parser';
import yaml from 'js-yaml';
import * as fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const parseCSV = async () => {
    const p = path.resolve(__dirname, 'me.csv');
    const file = fs.readFileSync(p, 'utf-8');
    
    const res = Papa.parse(file, {
        dynamicTyping: true,
        header: true
    });
    return res.data;
};

export const parseJSON = () => {
    const p = path.resolve(__dirname, 'me.json');
    const file = fs.readFileSync(p);
    const parsedJSON = JSON.parse(file);
    return parsedJSON;
};

 export const parseXML = () => {
    const p = path.resolve(__dirname, 'me.xml');
    const file = fs.readFileSync(p, { encoding: 'utf-8' });
    const parser = new XMLParser();
    const parsedXML = parser.parse(file);
    return parsedXML;
};

export const parseTXT = () => {
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

export const parseYAML = () => {
    const p = path.resolve(__dirname, 'me.yaml');
    const parsedYAML = yaml.load(fs.readFileSync(p, 'utf-8'));
    return parsedYAML;
};

export default {
    parseXML,
    parseJSON,
    parseCSV,
    parseTXT,
    parseYAML
}