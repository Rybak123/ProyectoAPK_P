
const db = require('_helpers/conexion');
const PruebaGeneral=db.PruebaGeneral;


module.exports = {
    leerPruebaGeneral,
    listarPruebaGeneral

};

async function leerPruebaGeneral(peticionJSON) {
 
    return await PruebaGeneral.findById(peticionJSON._id);
}
async function listarPruebaGeneral() {
    return await PruebaGeneral.find();
}

