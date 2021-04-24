import fs = require('fs');
import path = require('path');
import axios from 'axios';
import express = require('express');
import { Response } from 'express';
import webpack = require('webpack');
import webpackDevMiddleware = require('webpack-dev-middleware');
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
import webpackConfig = require('../webpack-config');

const app = express();

const PORT = 3030;

app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/sessions', (req, res) => {
    axios.post('http://localhost:8080/sessions', {
        email: req.body?.email,
        password: req.body?.password
    })
        .then((response) => {
            console.log(response.headers['set-cookie']);
            return res.json(response.headers['set-cookie']);
        })
        .catch(e => console.error(e));
});

app.get('/api/feedbacks', (req, res: Response) => {
    let json: string;

    if (req.query.lang === 'ru') {
        json = fs.readFileSync('./stub/feedbacks/ru.json', 'utf8');
    } else {
        json = fs.readFileSync('./stub/feedbacks/en.json', 'utf8');
    }

    res.json(JSON.parse(json));
});

app.get('/api*', (_, res: Response) => {
    axios.get(`http://localhost:8080${_.path}`)
        .then((response) => res.json(response.data))
        .catch(e => console.error(e));
});

app.get('/*', (_, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => 'Dev server started');
