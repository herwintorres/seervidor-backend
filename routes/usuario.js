import express from 'express';
// import { route } from 'express/lib/application';
const router = express.Router();

//importar el modelo de la nota
import Usuario from '../models/usuario';

//crear un usuario en la BD
router.post('/nuevo-usuario', async(req, res) => {
    const body = req.body;
    try{
        const usuarioDB = await Usuario.create(body);
        res.status(200).json(usuarioDB);
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        });
    }
});

// consultar los usuarios en la base de datos
router.get('/usuario', async(req,res) =>{
    try{
        const usuarioDB = await Usuario.find();
        res.json(usuarioDB);
    }catch(error){
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        });
    }
});




//exportaremos la configuración de express app
module.exports = router; 