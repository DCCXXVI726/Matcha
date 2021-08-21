import fs = require('fs');

import express, { Request, Response } from 'express';

export const router = express.Router()
    .get('/pairs', (req: Request, res: Response) => {
        console.log(`/pairs UserId get by query ${req.query}`);
        res.json(JSON.parse(fs.readFileSync('./stub/dummy/pairs.json', 'utf8')));
    })

    .get('/messages-list', (req: Request, res: Response) => {
        console.log(`/messages-list UserId get by query ${req.query}`);
        res.json(JSON.parse(fs.readFileSync('./stub/dummy/messages.json', 'utf8')));
    })

    .get('/messages/:userId', () => {

    });
