//modelo de ddatos, ejemplo usuario, paciente, son objetos q representan la estructura de datos
//nuestro esquema de base de datos-> no usamos tablas sino documentos osea esquemas que representan a nuestro base de datos
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    codigoDePrueba: { type: Number,required: false }, 
    nombreDePrueba: { type: String, required: true },
    descripcionDeLaPrueba: { type: String, required: true },
    duracionEstimada: { type: Number, required: true },
    urlDocumentoTareas: { type: String, required: true },
    
   // token: { type: String, required: false }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.hash;
    }
});
module.exports = mongoose.model('PruebaGeneral', schema);