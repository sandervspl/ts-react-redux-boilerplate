import * as React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import ServerRoot from './ServerRoot';
const renderFullPage = require('./renderFullPage');

export default (ssr): express.RequestHandler => {
    const sheet = new ServerStyleSheet();
    const styleTags = sheet.getStyleTags();

    return (req, res) => {
        const html = ssr
            ? renderToString(<ServerRoot location={req.url} sheet={sheet.instance}/>)
            : ' ';

        res.status(200).send(renderFullPage({ html, styleTags }));
    };
};
