import mysql from 'mysql';

const pool = mysql.createPool({
    host : 'localhost',
    port : 3308,
    user : 'root',
    password : '',
    database : 'node-express-db-11-1',
    connectionLimit : 1
});

export default pool;