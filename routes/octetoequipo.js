import express from 'express';
import OctetoEquipos from '../models/octetoequipo';
const router = express.Router();

//crear documentos en la colección octetoequipo
router.post('/nuevo-octetoequipo', async(req, res) => {
    const body = req.body;
    try{
        const octetoequipoDB = await OctetoEquipos.create(body);
        res.status(200).json(octetoequipoDB);
    }catch (error){
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        });
    }
});

//crear 

  module.exports = router;
