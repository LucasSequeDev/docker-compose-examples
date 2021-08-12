const mysql = require('mysql2/promise')

const connectMySQL = () => {
  mysql.createConnection({
    user: "root",
    password: "drowssap",
    host: "mysql",
    database: "mongodb_test"
  })
  .then((db) => console.log('db is connected on port 3360'))
  .catch((err) => console.error(err))
}

module.exports = connectMySQL
