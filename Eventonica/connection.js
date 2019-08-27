//require packages
const pg = require("pg");
const pgKey = require('./keys').pg;

 //create PostgreSQL connection
 const connection = pg.createConnection({ //not working, tried pg.connect too
  
  host: "localhost",
  port: 3306,
  user: "juliana",
  password: null,
  database: "eventonica"
});

 module.exports = connection;