const mysql = require('mysql2/promise');
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
    host: process.env.mysql_host,
    database:process.env.mysql_database,
    user:process.env.mysql_user,
    password:process.env.mysql_password,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});

module.exports = pool;
