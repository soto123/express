const express = require('express')
const bp = require("body-parser")
const port = 5000
const app = express()
var variables = require('./variables-globales.js')
var variables_globales = new variables();

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : variables_globales.get_host(),
    user     : variables_globales.get_usuario(),
    password : variables_globales.get_clave(),
    database: variables_globales.get_base_datos()
});

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(require("morgan")("dev"))
app.get('/user/:id', function (req, res){
    res.send('user :' + req.params.id)
})

app.get('/proyecto/:id', function (req, res){
    connection.query('SELECT * FROM `proyectos` WHERE `id` = '+req.params.id, function(err, rows, fields) {
        if (err) throw err;
        res.json(rows[0])
    });
})

app.get('/proyecto', function (req, res){
    var respuesta = [];
    connection.query('SELECT * FROM `proyectos`', function(err, rows, fields) {
        if (err) throw err;
        if(rows.length > 0){
            res.json(rows);
        }else{
            res.send("No hay resultados")
        }
    });
    
})

app.get("/",(req,res) => {
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
    console.log(`Express server listening on port ${port}`);
})