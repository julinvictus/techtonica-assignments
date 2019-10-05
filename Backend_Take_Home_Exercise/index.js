const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose();
//const db = require("./database.js")

// open database
let db = new sqlite3.Database('./database.sqlite3', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('**Connected to the database.');
});

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and SQLite3 using DataSF API' })
})

app.get('/contractor/:companyName', (request, response) => {
    //let companyName = request.query;
    //console.log(companyName);
    let sql = `SELECT DISTINCT fire_violations.Address AS address FROM fire_violations
    INNER JOIN permits ON fire_violations.Location= permits.Location 
    INNER JOIN contacts ON permits.\`Permit Number\` = contacts.\`Permit Number\` 
    WHERE contacts.\`Company Name\`= ? ;`
    let params = [request.params.companyName];
    db.all(sql, params, (err, row) => {
        if (err) {
            console.error(err.message);
            response.status(400).json({"error":err.message});
        }
        response.json({ 
            "address": row
        })
        console.log(row);
    }) 
})

app.get('/contractor/:block', (request, response) => {
    //let companyName = request.query;
    //console.log(companyName);
    let sql = `SELECT DISTINCT contacts.\`Company Name\` AS company_name FROM contacts INNER JOIN permits ON contacts.\`Permit Number\`= permits.\`Permit Number\` INNER JOIN fire_violations ON permits.Location = fire_violations.Location WHERE permits.Block= ? ;`
    let params = [request.params.block];
    db.all(sql, params, (err, row) => {
        if (err) {
            console.error(err.message);
            response.status(400).json({"error":err.message});
        }
        response.json({ 
            "company_name": row
        })
        console.log(row);
    }) 
})

// using request.query
app.get('/contractorx', (request, response) => {
    let companyName = request.query.companyName;
    console.log(companyName);
    let sql = `SELECT DISTINCT fire_violations.Address AS address FROM fire_violations
    INNER JOIN permits ON fire_violations.Location= permits.Location 
    INNER JOIN contacts ON permits.\`Permit Number\` = contacts.\`Permit Number\` 
    WHERE contacts.\`Company Name\`= ? ;`
    //let params = [];
    db.all(sql, [companyName], (err, row) => {
        if (err) {
            console.error(err.message);
            response.status(400).json({"error":err.message});
        }
        response.json({ 
            "address": row
        })
        console.log(row);
    }) 
})

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})