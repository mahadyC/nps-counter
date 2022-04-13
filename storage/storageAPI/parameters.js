'use strict';

const toArrayInsert = (scores) => [
    +scores.id, scores.score,  scores.comment
];

module.exports = { toArrayInsert}
