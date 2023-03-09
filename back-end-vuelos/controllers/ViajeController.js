//importamos el modelo
import {AerolineaModel, PilotoModel, ViajeModel, VueloModel} from '../models/Modelos.js';

//Mostrar todos los registros
export const getAllViajes = async (req,res) => {
    try{
        const viaje = await ViajeModel.findAll()
        res.json(viaje)
    }
    catch (error){
        res.json( {message: error.message} )
    }
}
//Mostrar todos los registros
export const getAllViajesVuelo = async (req,res) => {
    try{
        const viaje = await ViajeModel.findAll({
            where:{
                codigo: req.params.codigo
            },
            include:[
            {
                model: VueloModel,
                as:"vuelos"
            }
        ]}
        )
        res.json(viaje[0])
    }
    catch (error){
        res.json( {message: error.message} )
    }
}
//Mostrar todos los registros
export const getAllViajesPiloto = async (req,res) => {
    try{
        const viaje = await ViajeModel.findAll(
            {include:[{
                model:PilotoModel,
                as:"pilotos_p1"
            },{
                model:PilotoModel,
                as:"pilotos_p2"
            }
        ]}
        )
        res.json(viaje)
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Mostrar info de un codvuelo
export const getViaje = async (req,res) => {
    try{
        const viaje = await ViajeModel.findAll({
            where:{
                codigo: req.params.codigo
            }
        })
        res.json(viaje[0])
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createViaje = async (req,res) => {
    try{
        await ViajeModel.create(req.body)
        res.json({
            "message": "viaje creado"
        })
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updateViaje = async (req,res) => {
    try{
        await ViajeModel.update(req.body,{
            where: {codigo: req.params.codigo}
        })
        res.json({
            "message": "viaje actualizado"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}

//Eliminar un registro
export const deleteViaje = async (req,res) => {
    try{
        await ViajeModel.destroy({
            where: {codigo: req.params.codigo}
        })
        res.json({
            "message": "viaje eliminado"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}


// module.exports = {
//   //Mostrar todos los registros
//   getAllViajes: async (req, res) => {
//     try {
//       const viaje = await models.ViajeModel.findAll();
//       res.json(viaje);
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Mostrar info de un codvuelo
//   getViaje: async (req, res) => {
//     try {
//       const viaje = await models.ViajeModel.findAll({
//         where: {
//           codigo: req.params.codigo,
//         },
//       });
//       res.json(viaje[0]);
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Crear un registro
//   createViaje: async (req, res) => {
//     try {
//       await models.ViajeModel.create(req.body);
//       res.json({
//         message: "viaje creado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Actualizar un registro
//   updateViaje: async (req, res) => {
//     try {
//       await models.ViajeModel.update(req.body, {
//         where: { codigo: req.params.codigo },
//       });
//       res.json({
//         message: "viaje actualizado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Eliminar un registro
//   deleteViaje: async (req, res) => {
//     try {
//       await models.ViajeModel.destroy({
//         where: { codigo: req.params.codigo },
//       });
//       res.json({
//         message: "viaje eliminado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },
// };


