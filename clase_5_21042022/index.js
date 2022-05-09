

const express = require('express')
const app = express()

/* app.get('/', function (req, res) {
  res.send('Hello World')
});  */

app.get(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
  });

app.listen(3000)
console.log("Funciona");