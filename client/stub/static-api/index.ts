import fs = require('fs');

import express, { Response } from 'express';

const langDependentApi = (res: Response, lang: unknown, ru: string, en: string): Response => (
    lang === 'ru' || lang === 'Русский'
        ? res.json(JSON.parse(ru))
        : res.json(JSON.parse(en))
);

export const router = express.Router()
    .get('/feedbacks', (req, res: Response) => {
        langDependentApi(
            res,
            req.query.lang,
            fs.readFileSync('./stub/static-api/feedbacks/ru.json', 'utf8'),
            fs.readFileSync('./stub/static-api/feedbacks/en.json', 'utf8')
        );
    })

    .get('/genders', (req, res: Response) => {
        langDependentApi(
            res,
            req.query.lang,
            fs.readFileSync('./stub/static-api/genders/ru.json', 'utf8'),
            fs.readFileSync('./stub/static-api/genders/en.json', 'utf8')
        );
    })

    .get('/interests', (req, res: Response) => {
        langDependentApi(
            res,
            req.query.lang,
            fs.readFileSync('./stub/static-api/interests/ru.json', 'utf8'),
            fs.readFileSync('./stub/static-api/interests/en.json', 'utf8')
        );
    })

    .get('/orientations', (req, res: Response) => {
        langDependentApi(
            res,
            req.query.lang,
            fs.readFileSync('./stub/static-api/orientations/ru.json', 'utf8'),
            fs.readFileSync('./stub/static-api/orientations/en.json', 'utf8')
        );
    });
