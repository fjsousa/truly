var async = require('async');
var mysql      = require('mysql');
// var fs = require('fs');

// fs.readFile('./shoes.jpg', function(err, data) {
//    var base64shoes = new Buffer(data).toString('base64');
//     console.log(base64shoes);
// });

module.exports = shoesdb;

function shoesdb () {

  this.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
  });

  this.connection.connect();


}



async.series([
  function (cb) {connection.connect(); cb(null,'connect');},
  useDataBase,
  queryFn,
  function (cb) {connection.end(); cb(null,'connect');}
]);



function useDataBase (cb) {
  var query = 'use shoes;';

  connection.query(query, function(err, rows, fields) {
    if (err) throw err;

    cb(null, 'use db');
  });
}

function queryFn (cb) {
  var query = 'select * from shoesTable;';

  connection.query(query, function(err, rows, fields) {
    if (err) throw err;

    rows.forEach(function(row) {
      console.log(row.name,row.shoe2.toString());
    });
    cb(null, 'query done');
  });
}

}