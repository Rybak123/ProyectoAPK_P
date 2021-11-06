//modelo de ddatos, ejemplo usuario, paciente, son objetos q representan la estructura de datos
//nuestro esquema de base de datos-> no usamos tablas sino documentos osea esquemas que representan a nuestro base de datos
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    carnetDeIdentidad: { type: Number, unique: true, required: true }, 
    contrasena: { type: String, required: true },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    fecha_de_nacimiento: { type: Date, required: true },
    sexo: { type: String, required: true },
    numeroTelefonico: { type: Number, required: true },
    //Este atributo es necesario
    correoElectronico: { type: String, required: true },
    //Este atributo es opcional en el documento
    hashContrasena: { type: String, required: false },
    estado: { type: Boolean, required: true },
    fechaDeRegistro: { type: Date, required: true },
    fechaDeDeshabilitacion: { type: Date, required: false },
    token: { type: String, required: false }

    //son los atributos de una tablas, esqueleto del documento


});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.hash;
    }
});
module.exports = mongoose.model('Psicologo', schema);