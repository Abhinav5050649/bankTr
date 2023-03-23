var mysql = require('mysql');
/*
const mongoose = require("mongoose")

const mongooseURL = '';

const connectToMongo = () => {
    mongoose.connect(mongooseURL, () => {
        console.log("Connected to DB")
    })
}
*/
var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "12345678"
});

function connectToDB(){
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to DB!");

  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
}

var con2 = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "12345678",
    database: "mydb"
})

function createTable()
{
    con.connect(function(err) {
        var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });
    });
}
module.exports = connectToDB, createTable;