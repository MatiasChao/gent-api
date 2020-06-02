const mysql = require("mysql")

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'server343.dinamichosting.com',
    port: 3306,
    user: 'losdosca_usr01',
    password: 'G5ivarc2M2',
    database: 'losdosca_english'
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;