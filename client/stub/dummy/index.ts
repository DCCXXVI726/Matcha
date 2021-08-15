import fs = require('fs');

import express, { Response } from 'express';

export const router = express.Router()
    .get('/pairs', (_req, res: Response) => {
        res.json(JSON.parse(
            fs.readFileSync('./stub/dummy/pairs.json', 'utf8')
        ));
    });
