const mysql = require('mysql2')

// connection params
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "123456",
})

con.connect((err) => {
    if (err) throw err;
    console.log('Db is connected!')
})

// con.query(`select * from toDoAppDatabase.toDos`, (err, res) => {
//     if (err) {
//         console.log(`error ${err}`)
//     } else {
//         return console.log(res);
//     }
// })