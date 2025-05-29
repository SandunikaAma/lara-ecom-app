const mysql = require('mysql2');
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'SANdatabase7$',
    database:'lara_store'
});
db.connect((err)=>{
    if(err) throw err;
    console.log('connected to mysql');


});
module.exports =db;