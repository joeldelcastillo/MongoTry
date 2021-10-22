var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MiTienda');

var db = mongoose.connection;

db.on('error', console.error.bind(console, "error al conectar a la base de datos"));
db.once('open', function(){
    console.log("conectado a MongoDB");
});

var carritos = require('./routes/carritos');

var app = express();

app.use(bodyParser.json());

app.use('/api/v1/carritos', carritos);

app.listen(3000, function(){
    console.log("servidor arriba en el puerto 3000....");
});