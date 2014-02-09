var express = require('express');
var app = express();
var cors = require('cors');
var join = require('path').join;
// var logfmt = require("logfmt");
// app.use(logfmt.requestLogger());
app.use(cors());
app.configure(function(){
  app.use(express.bodyParser());
});

app.get('/welcome', function (req, res) {
  res.send('welcome');
});

// app.post('/create-shoe', function (req, res) {
//   if (!req.body)
//     return res.send(409, 'No content in body');

//   var email = req.body.email;
//   var name = req.body.name;
//   var tag = req.body.tag;
//   var type = req.body.type;
//   var gender = req.body.gender;
//   var size = req.body.size.toString();
//   var org = req.body.org;
//   var local = req.body.local;
//   var foto = req.body.foto;

//   var query =
//     'insert into shoeTable (name, email, tag, type, gender, size, org, local)' +
//     'VALUES('+
//       '"' + name+ '",'+
//       '"' + email+ '",'+
//       '"' + tag+ '",'+
//       '"' + type+ '",'+
//       '"' + gender+ '",'+
//       '"' + size+'",'+
//       '"' + org+ '",'+
//       '"' + local+
//       '");';

//   console.log(query);

//     connection.query(query, function(err, rows, fields) {
//       if (err) throw err;
//       res.send(200);
//     });
// });


var port = process.env.PORT || 5000;
app.listen(port, function (){
  console.log('Listening on port:', port);
});