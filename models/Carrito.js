var mongoose = require('mongoose');

//esquema del documento
var CarritoSchema = mongoose.Schema({
    usuario: {type: String},
    correo:  {type: String},
    estado:  {type: String},
    productos: [{
        id_producto:  {type: Number},
        nombre: {type: String},
        cantidad: {type: Number},
        precio_unitario: {type: Number}
    }]
}, { collection: 'carritos' });

var MiTienda = module.exports = mongoose.model('MiTienda', CarritoSchema);

module.exports.getCarritos = function(callback, limit) {
    MiTienda.find(callback).limit(limit);
}

module.exports.getCarritoById = function(id, callback) {
    MiTienda.findById(id, callback);
}