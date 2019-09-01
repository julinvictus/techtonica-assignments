const Pool = require('pg').Pool
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "juliana",
    password: "techtonica",
    database: "eventonica"
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getEvents = (request, response) => {
    pool.query('SELECT * FROM events ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers,
    getEvents,
}