var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
app.configure(function(){
  app.use(express.bodyParser());
});

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});

useDataBase();
function useDataBase () {
  var query = 'use shoes;';

  connection.query(query, function(err, rows, fields) {
    if (err) throw err;
  });
}

app.post('/create-shoe', function (req, res) {
  if (!req.body)
    return res.send(409, 'No content in body');

  var email = req.body.email;
  var name = req.body.name;
  var tag = req.body.tag;
  var type = req.body.type;
  var gender = req.body.gender;
  var size = req.body.size.toString();
  var org = req.body.org;
  var local = req.body.local;
  var foto = req.body.foto;

  var query =
    'insert into shoeTable (name, email, tag, type, gender, size, org, local)' +
    'VALUES('+
      '"' + name+ '",'+
      '"' + email+ '",'+
      '"' + tag+ '",'+
      '"' + type+ '",'+
      '"' + gender+ '",'+
      '"' + size+'",'+
      '"' + org+ '",'+
      '"' + local+
      '");';

  console.log(query);

    connection.query(query, function(err, rows, fields) {
      if (err) throw err;
      res.send(200);
    });

});

app.listen(8081);