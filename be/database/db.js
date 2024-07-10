import mysql from 'mysql2';

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0303',
    database: 'HisWeb_db'
});

conn.connect((err) => {
    if (err) console.log(err);
    else console.log('Connected to the database');
});

export default conn