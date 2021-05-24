const express = require('express')
const bp = require("body-parser")
const port = 5000
const app = express()
app.use(bp.urlencoded({ extended: false }))

app.use(bp.json())

app.use(require("morgan")("dev"))

app.get("/",(req,res) => {
    res.send("hello world");
})
app.listen(port, () => {
    console.log("Express server listening on port "+port);
})