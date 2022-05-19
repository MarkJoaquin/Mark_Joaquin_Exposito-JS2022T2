const express = require('express')
const app = express()
 
app.use(express.static('assets'));
app.use(express.static('node_modules'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get('/clientes', function(req, res) {
    res.sendFile(__dirname + "/views/costumer.html")
})


app.listen(3000)
console.log("Funciona")