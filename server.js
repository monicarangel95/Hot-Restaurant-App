// Dependencies
var express = require("express");
var path = require("path");

// sets up the Express App
var app = express();
var PORT = process.env.PORT || 3001;
// Handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Tables Array
var tables = [];
// Waitlist Array
var waitlist = [];

// ROUTES////
// Basic route that sends the user first to the AJAX Page
//Home view
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
//tables and waiting list view
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "waiting.html"));
});

// reservation addition view
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
//DATA/////
// table list
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});
// get waitlist
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});
app.post("/api/tables", function (req, res) {
    if (tables.length < 5) {
        tables.push(req.body);
        res.json(true);
    }
    else {
        waitlist.push(req.body);
        res.json(false);
    }
});

app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    tables.length = 0;
    waitlist.length = 0;

    res.json({ ok: true });
});

//SERVER STARTS
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// If no matching route is found default to home
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});