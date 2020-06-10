const express = require("express");
var mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

var connection = mysql.createConnection({
  host     : '54.180.94.68',
  user     : 'root',
  password : 'oracle',
  database : 'AGANON'
});

var dbRouter = require('./db.js');

app.use('/', express.static(__dirname + "/../src/pages/menu"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/ICT', (req, res) =>{
 // var sql = "SELECT * FROM ICT WHERE ?";
  //sql = mysql.format(sql, req.nation_id);
  //console.log(req);
	connection.query("SELECT * FROM ICT WHERE nation_id = 1", (err, rows) => {
		
    if(err) throw err;
		
    console.log(rows);
  });
  res.send(rows);
});

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello Express!" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));


