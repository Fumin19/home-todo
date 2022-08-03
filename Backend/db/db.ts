const mysql = require('mysql2')

// connection params
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "123456",
})