var express = require('express');
var app = express();
var cors = require('cors');
var join = require('path').join;
var mysql = require('mysql');
// var logfmt = require("logfmt");
// app.use(logfmt.requestLogger());
app.use(cors());
app.configure(function(){
  app.use(express.bodyParser());
});

app.get('/welcome', function (req, res) {
  res.send('welcome');
});

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'shoes'
});

// var query = 'use shoes';
// connection.query(query, function(err, rows, fields) {
//   if (err) throw err;
// });

connection.connect();

app.post('/create', function (req, res) {
  if (!req.body)
    return res.send(409, 'No content in body');

  var email = req.body.email;
  var name = req.body.name;

  var query = 'insert into person (name, email) values(' +
    '"' + name  + '",' +
    '"' + email + '");';

    connection.query(query, function(err, rows, fields) {
      if (err) throw err;

      var type = req.body.type;
      var gender = req.body.gender;
      var size = req.body.size.toString();
      var org = req.body.org;
      var local = req.body.local;
      var img = req.body.img;

      query = 'insert into shoe (personid,img,gender,size,type,org,local) values((select id from person where email = "' + email + '"),"' + img+ '","' + gender + '",' + size + ',"' + type + '","' + org +'","' + local +'");';

      connection.query(query, function(err, rows, fields) {
        if (err) throw err;
        res.send(200);
      });
    });

});
  

  // var query =
  //   'insert into shoeTable (name, email, tag, type, gender, size, org, local)' +
  //   'VALUES('+
  //     '"' + name+ '",'+
  //     '"' + email+ '",'+
  //     '"' + tag+ '",'+
  //     '"' + type+ '",'+
  //     '"' + gender+ '",'+
  //     '"' + size+'",'+
  //     '"' + org+ '",'+
  //     '"' + local+
  //     '");';



var port = process.env.PORT || 5000;
app.listen(port, function (){
  console.log('Listening on port:', port);
});