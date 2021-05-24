
const express = require('express')
const bp = require("body-parser")
const port = 5000
const app = express()
var variables = require('./variables-globales.js')
var variables_globales = new variables();
console.log(variables_globales.get_host());


var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'organizador_proyectos'
});


app.use(bp.urlencoded({ extended: false }))

app.use(bp.json())

app.use(require("morgan")("dev"))

app.get("/",(req,res) => {
    connection.connect();
    
    //connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    connection.query('SELECT * FROM `proyectos`', function(err, rows, fields) {
        
        if (err) throw err;
        console.log('The solution is: ', rows);
    });

    connection.end();
    res.send("GET : hello world");
})
app.get("/json",(req,res) => {
    let obj = {name: "borja"};
    res.json(obj);
})
app.post("/",(req,res) => {
    res.send("POST : hello world");
})
app.put("/",(req,res) => {
    res.send("PUT : hello world");
})
app.delete("/",(req,res) => {
    res.send("DELETE : hello world");
})
app.listen(port, () => {
    console.log("Express server listening on port "+port);
})