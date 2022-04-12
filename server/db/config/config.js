const Pool = require('pg').Pool
const {Sequelize} = require('sequelize')
/*
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'diplomadb',
  password: 'diploma',
  port: 5432,
});
*/
module.exports = new Sequelize(
    'diplomadb',                // database
    'postgres',                 // user
    'diploma',{                 // password
        dialect : 'postgres',
        host: 'localhost',
        port: 5432
    }
);