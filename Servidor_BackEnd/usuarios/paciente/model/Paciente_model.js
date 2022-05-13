const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    carnetDeIdentidad: { type: String, unique: true, required: true }, 
    contrasena: { type: String, required: true },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    sexo: { type: String, required: true },
    numeroTelefonico: { type: Number, required: true },
    correoElectronico: { type: String, required: true },
    estado: { type: Boolean, required: true, default:true},
    fechaDeNacimiento: { type: Date, required: true },
    fechaDeRegistro:{ type: Date, required: true},
    fechaDeDeshabilitacion: { type: Date, required: false},
    caducidadLicencia: { type: Date, required: true},
    hash: { type: String, required: false },
    token: { type: String, required: false },
    agendaVirtual:{
        controlDeEstudio:{
            diasControlados:[
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
        },
        misLibros:[
            {
                titulo:{type: String, default: "", require : false},
                autor:{type: String, default: "", require : false},
                editorial:{type: String, default: "", require : false},
                cantidadPaginas:{type: Number, default: 0, require : false},
                fecha:{type: String, default: "", require : false},
                genero:{type: String, default: "", require : false},
                descripcion:{type: String, default: "", require : false},
                imagenPortada:{type: String, default: "", require : false}
            }
        ],
        misCanciones:[
            {
                titulo:{type: String, default: "", require : false},
                genero:{type: String, default: "", require : false},
                artista:{type: String, default: "", require : false},
                fecha:{type: String, default: "", require : false},
                descripcion:{type: String, default: "", require : false},
                imagenPortada:{type: String, default: "", require : false}
            }
        ],
        misMetas:[
            {
                titulo:{type: String, default: "", require : false},
                fechaDeRegistro:{type: String, default: "", require : false},
                fechaDeLaMeta:{type: String, default: "", require : false},
                prioridad:{type: String, default: "", require : false},
                descripcion:{type: String, default: "", require : false}
            }
        ],
        misMetasPersonales:[
            {
                tipoDeActividad:{type: String, default: "", require : false},
                fechaDeCompletitud:{type: String, default: "", require : false}
            }
        ],
        misFavoritos:{
            canciones:[
                {
                    titulo:{type: String, default: "", require : false},
                    imagen:{type: String, default: "", require : false},
                    clasificacion:{type: Number, default: 0, require : false},
                    descripcion:{type: String, default: "", require : false}
                }
            ],
            lugares:[
                {
                    titulo:{type: String, default: "", require : false},
                    imagen:{type: String, default: "", require : false},
                    clasificacion:{type: Number, default: "", require : false},
                    descripcion:{type: String, default: "", require : false}
                }
            ],
            peliculas:[
                {
                    titulo:{type: String, default: "", require : false},
                    imagen:{type: String, default: "", require : false},
                    clasificacion:{type: Number, default: "", require : false},
                    descripcion:{type: String, default: "", require : false} 
                }
            ],
            momentos:[
                {
                    titulo:{type: String, default: "", require : false},
                    imagen:{type: String, default: "", require : false},
                    clasificacion:{type: Number, default: "", require : false},
                    descripcion:{type: String, default: "", require : false} 
                }
            ]
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