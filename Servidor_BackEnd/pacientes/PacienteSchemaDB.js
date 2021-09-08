const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    carnetDeIdentidad: { type: String, unique: true, required: true }, 
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    lugarDeNacimiento: { type: String, required: true },
    fechaDeNacimiento: { type: Date, required: true },
    sexo: { type: String, required: true },
    numeroDeContacto: { type: Number, required: true },
    correoElectronico: { type: String, required: true },
    contrasena: { type: String, required: true },
    //Este atributo es necesario
    nombreDeUsuario: { type: String, required: true },
    //Este atributo es opcional en el documento
    parientes: { type: Object, required: false },
    hash: { type: String, required: false },

    agendaVirtual:{
        controlDeEstudio:{
            diasDeEstudio:[
                {
                fecha:{type: String, default: "2021-1-1"},
                materiasEstudiadas:[{
                    cantidadDeTiempo:0,
                    materia:""
                }]
                }
            ],
        },
        controlDeSueno:{
            diasControlados:[
                {
                fecha:{type: String, default: "2021-1-1"},
                horasDeSueno:{type: String, default: ""}
                }
            ],
        },
        controlDeEnergia:{
            diasControlados:[
                {
                fecha:{type: String, default: "2021-1-1"},
                porcentajeDeEnergia:{type: String, default: ""}
                }
            ],
        },
        controlDeAnimo:{
            diasControlados:[
                {
                fecha:{type: String, default: "2021-1-1"},
                estadoDeAnimo:{type: String, default: ""}
                }
            ],
        },
        controlDeConsumoDeAgua:{
            diasControlados:[
                {
                fecha:{type: String, default: "2021-1-1"},
                cantidadDeAgua:{type: String, default: ""}
                }
            ],
        }
    }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});
module.exports = mongoose.model('Paciente', schema);