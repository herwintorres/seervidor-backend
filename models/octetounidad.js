import mongoose from 'mongoose';
const Schema = mongoose.Schema;


export const octetounidadSchema = new mongoose.Schema({
    sigla : {type: String, required: [true, 'Campo de unidad obligatorio']},
    dependencia :  {type: String, required: [true, 'Campo de dependencia obligatorio']},
    octetoTres : {type:String, required:[true, 'Campo de octeto 3 obligatorio']},
    octetoCuatro : {type:String, required:[true, 'Campo de octeto 4 obligatorio']},
    octetoprincipalId : [{type: Schema.Types.ObjectId, ref:'Octetoprincipal'}],
    activo: {type: Boolean, default: true}
    
},{
    versionKey:false,
    timestamps: true
});

const Octetounidad = mongoose.model('Octetounidad', octetounidadSchema);
export default Octetounidad; 