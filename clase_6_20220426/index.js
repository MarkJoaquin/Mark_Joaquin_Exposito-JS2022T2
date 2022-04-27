const express = require('express')

const app = express()

app.use(express.static('assets'));

app.get('/', function(req ,res){

    res.sendFile(__dirname + "/index.html")
});

app.get('/form', function(req, res){
    res.sendFile(__dirname + "/form.html")
});

app.get('/ejercicio', function(req, res){
    res.sendFile(__dirname + '/ejercicio.html')
});

app.listen(3000)

console.log("Funciona");