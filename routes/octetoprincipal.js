import express from 'express';
const router = express.Router();

//importar el modelo del octeto principal
import Octetoprincipal from '../models/octetoprincipal';

//crear BD con los campos del formulario Direccionamiento ip octeto principal
router.post('/nuevo-octetoprincipal', async(req, res) => {
    const body = req.body;
    try{
        const octetoprincipalDB = await Octetoprincipal.create(body);
        res.status(200).json(octetoprincipalDB);
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        });
    }
});

//obtener octetos por id de la base de datos
router.get('/octetoprincipal/:id', async(req, res) =>{
    const _id = req.params.id;
    try{
        const octetoprincipalDB = await Octetoprincipal.findOne({_id});
        res.json(octetoprincipalDB);

    }catch (error){
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            err
        });
    }
});

// consultar los octetos creados en la base de datos
router.get('/octetoprincipal', async(req,res) =>{
    try{
        const octetoprincipalDB = await Octetoprincipal.find();
        res.json(octetoprincipalDB);
    }catch(error){
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        });
    }
});

//Actualizar un registro del octetoprincipal
router.put('/octetoprincipal/:id', async(req,res) => {
    const _id = req.params.id;
    const body = req.body;
    try{
        const octetoprincipalDB = await Octetoprincipal.findByIdAndUpdate(
            _id,
            body,
            {new:true}
        );
        res.json(octetoprincipalDB);
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            err
        });
    }
});
module.exports = router;