import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const octetoprincipalSchema = new mongoose.Schema({
    entidad : {type: String, required: [true, 'Campo obligatorio de la entidad']},
    octetoUno : {type: String, required: [true, 'Campo obligatorio asignado a la unidad']},
    octetoDos : {type: String, required: [true, 'Campo obligatorio asignado a la unidad']},
    activo: {type: Boolean, default: true}
},{
    versionKey:false,
    timestamps: true
});

const Octetoprincipal = mongoose.model('Octetoprincipal', octetoprincipalSchema);
export default Octetoprincipal;