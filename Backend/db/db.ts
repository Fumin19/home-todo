const mysql = require('mysql2')

// connection params
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "123456",
})

export { db };

// con.query(`select * from toDoAppDatabase.toDos`, (err, res) => {
//     if (err) {
//         console.log(`error ${err}`)
//     } else {
//         return console.log(res);
//     }
// })