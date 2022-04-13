'use strict';

const Datastorage = require('./storage/storageAPI/dataStorageAPI');

const db = new Datastorage();


// db.get(3).then(console.log).catch(console.log);


const newScore = {
    id: 4,
    score: '9',
    comment: 'hi'
};

// db.insert(newScore).then(console.log).catch(console.log);
db.getAll().then(console.log).catch(console.log);
//    db.remove(3).then(console.log).catch(console.log);

// db.update(2, newGame).then(console.log).catch(console.log);