'use strict';

const CODES = {
    PROGRAM_ERROR: 0,
    INESRT_OK: 1,
    NOT_INSERTED: 2
};

const TYPE = {
    ERROR: 'error',
    INFO: 'info'
}

const MESSAGES = {
    PROGRAM_ERROR: ()=> ({
        message: 'Sorry! Error in the porgram',
        code: CODES.PROGRAM_ERROR,
        type: TYPE.ERROR
    }),
    INESRT_OK: (key, value) => ({
        message: `Resource with ${key} ${value} was inserted`,
        code: CODES.INESRT_OK,
        type: TYPE.INFO
    }),
    NOT_INSERTED: () => ({
        message: 'Resource was not inserted',
        code: CODES.NOT_INSERTED,
        type: TYPE.ERROR
    })
}

module.exports = {CODES, MESSAGES}