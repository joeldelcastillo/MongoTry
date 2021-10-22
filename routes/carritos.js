var express = require('express');
var router = express.Router();

var MiTienda = require('../models/Carrito');

//listar todas los carritos
router.get('/', function(req, res, next){
    MiTienda.getCarritos( function(err, carritos){
        if(err) {
            res.send(err);
        } else {
            res.json(carritos);
        }
    }, 10);
});

//listar un carrito por id
router.get('/:id', function(req, res, next){
    MiTienda.getCarritoById([req.params.id], function(err, carrito){
        if(err) {
            res.send(err);
        } else {
            res.json(carrito);
        }
    });
});

//agregar un carrito
router.post('/', function(req, res, next) {
    var carrito = req.body;
    var newCarrito = new MiTienda(carrito);

    newCarrito.save(function (err, movie) {
        if(err) {
            res.send(err);
        } else {
            res.json(movie);
        }
    });
});

//editar un carrito
router.put('/:id', function(req, res, next) {
    var query = {_id: [req.params.id]};
    var editMovie = req.body;

    MiTienda.update(query, {$set : editMovie}, {}, function(err, movie){
        if(err){
            res.send(err);
        } else {
            res.json(movie);
        }
    });
});

//eliminar una pelicula
router.delete('/:id', function(req, res, next){
    var query = {_id : [req.params.id]};
    MiTienda.remove(query, function(err){
        if(err){
            res.send(err);
        }
        res.json({msg:"Documento eliminado"});
    });
});

module.exports = router;