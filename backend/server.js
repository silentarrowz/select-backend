const express = require("express");
const sql = require('./config/db');
const app = express();

// parse requests of content-type: application/json
app.use(express.json());
app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  next();
});

// simple route
app.get("/get-all", (req, res) => {
  sql.query("SELECT * FROM clients", (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.send('there was an error');
    }

    console.log("clients: ", result);
    res.send(result);
  });
});

app.get("/find", (req, res) => {
  const name = req.query.name;
  console.log('name : ',name);
  const findQuery = `SELECT * FROM clients WHERE name LIKE '%${name}%'`;
  console.log('find query : ',findQuery);
  sql.query(findQuery, (err, result) => {
    if (err) {
      console.log("error: ", err);
      res.send('there was an error');
    }else{
      console.log("clients: ", result);
      res.send(result);
    }

    
  });
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
