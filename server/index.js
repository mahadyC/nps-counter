'use strict';

const cors = require('cors');

const express = require('express');
const app = express();
const DataStorage = require('../storage/storageAPI/dataStorageAPI');
const storage = new DataStorage();
const port = 3000;
const host = 'localhost';

app.use(cors());

app.use(express.json());

app.get('/dashboard-data', (req, res) => {
    storage.getAll().then(result => res.json(result)).catch(err => res.json(err));
});

app.post('/form-data', (req, res) => {
    const npsScore = req.body;
    storage.insert(npsScore)
        .then(status => res.json(status))
        .catch(err => res.json(err));
});

app.all('*', (req, res) => res.json('resource not supported'));

app.listen(port, host, () => {
    console.log(`NPS backend server is listening on port ${host}:${port}`);
});

