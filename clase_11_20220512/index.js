const express = require('express')
const app = express()
 
app.use(express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get('/listado', function(req, res) {
    res.sendFile(__dirname + "/listado.html")
})

app.listen(3000)
console.log("Funciona")