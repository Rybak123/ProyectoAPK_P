const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    
    Titulo: { type: String, required: true },
    Descripcion: { type: String, required: true },
    FechaDePublicacion: { type: Date, required: true },
    FechaDelEvento: { type: Date, required: true },
    Imagen: {type:String, required:false},
    Estado: {type:Boolean, required:false}
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.hash;
    }
});
module.exports = mongoose.model('Eventos', schema);

//class Eventos




