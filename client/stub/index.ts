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

/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const langDependentApi = (res: Response, lang: unknown, ru: string, en: string): void => {
    // eslint-disable-next-line
    if (lang === 'ru' || lang === 'Русский') {
        res.json(JSON.parse(ru));
    } else {
        res.json(JSON.parse(en));
    }
};

app.post('/sessions', (req, res) => {
    axios.post('http://localhost:8080/sessions', {
        email: req.body?.email,
        password: req.body?.password
    })
        .then((response) => {
            console.log(response.headers['set-cookie']);
            return res.json(response.headers['set-cookie']);
        });
    // .catch(e => console.error(e));
});

app.get('/api/feedbacks', (req, res: Response) => {
    langDependentApi(
        res,
        req.query.lang,
        fs.readFileSync('./stub/api/feedbacks/ru.json', 'utf8'),
        fs.readFileSync('./stub/api/feedbacks/en.json', 'utf8')
    );
});

app.get('/api/genders', (req, res: Response) => {
    langDependentApi(
        res,
        req.query.lang,
        fs.readFileSync('./stub/api/genders/ru.json', 'utf8'),
        fs.readFileSync('./stub/api/genders/en.json', 'utf8')
    );
});

app.get('/api/interests', (req, res: Response) => {
    langDependentApi(
        res,
        req.query.lang,
        fs.readFileSync('./stub/api/interests/ru.json', 'utf8'),
        fs.readFileSync('./stub/api/interests/en.json', 'utf8')
    );
});

app.get('/api/orientations', (req, res: Response) => {
    langDependentApi(
        res,
        req.query.lang,
        fs.readFileSync('./stub/api/orientations/ru.json', 'utf8'),
        fs.readFileSync('./stub/api/orientations/en.json', 'utf8')
    );
});

app.get('/api/kek', (req, res) => {
    console.log(req.query);
    void (res);
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
