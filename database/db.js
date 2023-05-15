const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Juan David',
    password: '1234',
    database: 'toc'
})

connection.connect((err)=>{
    if(err){
        console.error('Connection error is: '+err);
        return
    }
    console.log('MySql Database connected!')
})

module.exports = connection;