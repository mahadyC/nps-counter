'use strict';

const cors = require('cors');

const express = require('express');
const app = express();

const port = 3000;
const host = 'localhost';

app.use(cors());

app.use(express.json());

app.get('/dashboard-data', (req, res) => {
    res.send('Here is the data for the dashboard');
});

app.post('/form-data', (req, res) => {
    res.send('Got a form data submit request');
});

app.all('*', (req, res) => res.json('resource not supported'));

app.listen(port, host, () => {
    console.log(`NPS backend server is listening on port ${host}:${port}`);
});

