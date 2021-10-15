import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var octetoEquiposSchema = new Schema({
    marca : {type: String, required: [true, 'Campo de unidad obligatorio']},
    modelo : {type: String, required:[true, 'campo modelo obligatorio']},
    nombre : {type: String, required:[true, 'campo nombre de equipo']}, 
    ipv4 : {type: String, required:[true, 'campo ipv4 del equipo activo']},
    octetoCinco : {type: String, required:[true, 'campo octetoCinco']},
    octetoSeis : {type: String, required:[true, 'campo octetoSeis']},
    octetoSiete : {type: String, required:[true, 'campo octetoSiete']},
    octetoOcho : {type: String, required:[true, 'campo octetoOcho']},
    octetoUnidadId : {type: mongoose.Schema.Types.ObjectId, ref:"Octetounidad"}
},{
    versionKey:false,
    timestamps: true
});

const OctetoEquipos = mongoose.model("OctetoEquipos", octetoEquiposSchema);
export default OctetoEquipos; 

