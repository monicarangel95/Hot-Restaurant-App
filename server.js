// Dependencies
var express = require ("express");
var path = require("path");
var tablelist = [];
// sets up the Express App
var app = express();
var PORT = process.env.PORT || 3001;
// Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes/////
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
//tables and waiting list
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// reservation addition
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// table list
app.get("/api/tables", function (req, res) {

  console.log(tablelist);
  res.status(200).json(tablelist);

});
// get table list
app.get("/api/waitlist", function(req, res){
    let tables = [];
    if(tablelist.length > 5){
      tables = tablelist.slice(5);
    }
    res.status(200).json(tables);
  })
  