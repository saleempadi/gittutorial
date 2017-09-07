'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8080;
const HOST = 'localhost';
const DEFAULT_COLORS = ['RED', 'GREEN', 'BLUE'];
const app = express();
app.use(bodyParser.json({
    limit: '100k',
}));
let colors = [].concat(DEFAULT_COLORS);
app.get('/colors', function (req, res, next) {
    res.json({
        results: colors
    });
});
app.post('/colors', function (req, res, next) {
    if (req.is('application/json') && typeof req.body.color === 'string') {
        let color = req.body.color.trim().toUpperCase();

        if (color && colors.indexOf(color) < 0) {
            colors.push(color);

            return res.status(201).send({
                results: colors
            });
        }
    }
    res.status(400).send(); // 400 Bad Request
});
app.listen(PORT, HOST);
console.log('Listening on %s:%d...', HOST || '*', PORT);
module.exports = app;