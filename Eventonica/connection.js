//require packages
const pg = require("pg");
const pgKey = require('./keys').pg;
const Pool = require('pg').Pool;

 //create PostgreSQL connection
 const connection = new Pool({
  
  host: "localhost",
  port: 5432,
  user: "juliana",
  password: "techtonica",
  database: "eventonica"
});

 module.exports = connection;