'use strict';

const { CODES, MESSAGES} = require('./statusCodes');
const Database = require('../databaseClass');
const options = require('./databaseOptions.json');
const sql = require('./sqlStatements.json');
const { toArrayInsert} = require('./parameters');

const getAllSql = sql.getAll.join(' ');
const insertSql = sql.insert.join(' ');

const PRIMARY_KEY = sql.primaryKey;

module.exports = class Datastorage {
    constructor(){
        this.db = new Database(options); 
    }

    get CODES(){
        return CODES;
    }

    getAll(){
        return new Promise( async (resolve, reject) => {
            try{
                const result = await this.db.doQuery(getAllSql);
                resolve(result.queryResult);
            }
            catch(err) {
                console.log(err);
                reject(MESSAGES.PROGRAM_ERROR())
            }
        })
    } 
    
    insert(resource){
        return new Promise( async (resolve, reject) => {
            try{
                await this.db.doQuery(insertSql, toArrayInsert(resource));
                resolve(MESSAGES.INESRT_OK(PRIMARY_KEY, resource[PRIMARY_KEY]));
            }
            catch(err){
                reject(MESSAGES.NOT_INSERTED());
            }
        })
    } 

}