import path = require('path');
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
app.use('/app', (_, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => 'Dev server started');
