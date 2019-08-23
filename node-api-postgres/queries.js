const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

// Register a callback function to log errors and
// terminate the web server process if postgresql 
// has a problem
pool.on('error', (err, client) => {
    console.error('Unexpected error on client', err)
    process.exit(-1)
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id=$1', [id], (error, results) => {
        if (error){
            throw error
        }
        response.status(200).json(results.row)
    })
}

const createUser = (request, response) => {
    const { name, email} = request.body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error){
            throw error
        }
        response.status(201).send(`User added`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email} = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error){
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`) 
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}

const db = require('./queries')