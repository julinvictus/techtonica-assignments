// file only used to check db on terminal

const sqlite3 = require('sqlite3').verbose();

// open database
let db = new sqlite3.Database('./database.sqlite3', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('**Connected to the database.');
});

db.serialize(() => {
    db.each(`SELECT DISTINCT fire_violations.Address AS address FROM fire_violations
    INNER JOIN permits ON fire_violations.Location= permits.Location 
    INNER JOIN contacts ON permits.\`Permit Number\` = contacts.\`Permit Number\` 
    WHERE contacts.\`Company Name\`="Millennium Electric Inc";`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.address);
    });
});

// close the database connection
db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('**Close the database connection.');
});

module.exports = db