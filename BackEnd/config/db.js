const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',       
    password: '',       
    database: 'mangaDB' 
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as ID', connection.threadId);
});

module.exports = connection;