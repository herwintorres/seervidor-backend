import mongoose from 'mongoose';
const Schema = mongoose.Schema;


export const usuarioSchema = new mongoose.Schema({
    nombre : {type: String, required: [true, 'Campo de nombre obligatorio']},
    apellido :  {type: String, required: [true, 'Campo de apellido obligatorio']},
    cedula : {type:Number, required:[true, 'Campo de cédula obligatorio']},
    correo : {type:String, required:[true, 'Campo de correo obligatorio']},
    nombreUsuario : {type:String, required:[true, 'Campo de nombre usuario obligatorio']},
    clave : {type:String, required:[true, 'Campo de clave obligatorio']},
    rol : {type:String, required:[true, 'Campo rol obligatorio']},
    unidad : {type:String, required:[true, 'Campo unidad obligatorio']},
    sigla : {type: String, required:[true, 'Campo sigla obligatorio']},
    fecha : {type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
    
},{
    versionKey:false,
    timestamps: true
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario; 

