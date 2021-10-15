import express from 'express';
import Octetounidad from '../models/octetounidad';
import Octetoprincipal from '../models/octetoprincipal';
const router = express.Router();


// const principalconunidad = async () =>{
//     const resultado = await Octetounidad.aggregate(
//         [
//             { $lookup:
//                 {
//                     from : "Octetoprincipal",
//                     localField : "octetoprincipalId",
//                     foreignField : "_id",
//                     as: "principalId"
//                 }
//             }
//         ]
//     )
//     console.log(resultado);
// }
// principalconunidad();

//crear documentos en la colección octetounidad
router.post('/nuevo-octetounidad', async(req, res) => {
    const body = req.body;
    try{
        const octetounidadDB = await Octetounidad.create(body);
        res.status(200).json(octetounidadDB);
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        });
    }
});

//obtener octetos por id de la base de datos
router.get('/octetounidad/:id', async(req, res) =>{
    const _id = req.params.id;
    try{
        const octetounidadDB = await Octetounidad.findOne({_id});
        res.json(octetounidadDB);

    }catch (error){
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            err
        });
    }
});

// consultar los octetos creados en la base de datos
router.get('/octetounidad', async(req,res) =>{
    try{
        const octetounidadDB = await Octetounidad.find();
        res.json(octetounidadDB);
    }catch(error){
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        });
    }
});

//Actualizar un registro del octetounidad
router.put('/octetounidad/:id', async(req,res) => {
    const _id = req.params.id;
    const body = req.body;
    try{
        const octetounidadDB = await Octetounidad.findByIdAndUpdate(
            _id,
            body,
            {new:true}
        );
        res.json(octetounidadDB);
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            err
        });
    }
});

router.get("/octetounidad", function (req, res) {
    Octetounidad.find({}, function (err, octetounidad) {
      Octetoprincipal.populate(octetounidad, { path: "_id" }, function (err, octetounidad) {
        res.status(200).send(octetounidad);
      });
    });
});

//exportaremos la configuración de express app
module.exports = router; 
