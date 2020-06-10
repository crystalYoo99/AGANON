
const mysql = require('mysql');
const connection = mysql.createPool({
    host     : '54.180.94.68',
    user     : 'root',
    password : 'oracle',
    database : 'AGANON'
});

module.exports=connection;

