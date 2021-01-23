const mysql = require('mysql');
const dbConfig = require('./db.config');
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to db!');
});

module.exports = connection;