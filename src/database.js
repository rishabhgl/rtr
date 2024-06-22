const {Pool} = require('pg')

const client = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "immaprogrammer",
    database: "teacher"
})

client.connect()

// const getAva

// client.query(`DELETE FROM books
// WHERE book_id > 3;



// `, (err, res) => {
//     if (err){
//         return console.log(err)
//     }

//     console.log(res)
// })

module.exports = client