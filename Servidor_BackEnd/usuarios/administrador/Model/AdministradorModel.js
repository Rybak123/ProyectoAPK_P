const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    carnetDeIdentidad: { type: Number, unique: true, required: true }, 
    contrasena: { type: String, required: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    fechaDeNacimiento: { type: Date, required: true },
    sexo: { type: String, required: true },
    numeroTelefonico: { type: Number, required: true },
    correoElectronico: { type: String, required: true },
    hash_contrasena: { type: String, required: false },
    token: { type: String, required: false },
    estado:{ type: Boolean, required: true },
    fechaDeRegistro: { type: Date, required: true },
    fechaDeDesabilitacion: { type: Date, required: false }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.hash;
    }
});
module.exports = mongoose.model('Administrador', schema);