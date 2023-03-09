//importamos el modelo
import {PilotoModel, ViajeModel} from '../models/Modelos.js';


//Mostrar todos los registros
export const getAllPilotos = async (req,res) => {
    try{
        const Pilotos = await PilotoModel.findAll()
        res.json(Pilotos)
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getViajesPiloto = async (req,res) => {
    try{
        const piloto = await PilotoModel.findAll({
            where:{
                id: req.params.id
            },
            include:[{
                model:ViajeModel,
                as:"viajes_p2"
            },{
                model:ViajeModel,
                as:"viajes_p1"
            }
        ]
        })
        res.json(piloto)
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getPiloto = async (req,res) => {
    try{
        const piloto = await PilotoModel.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(piloto[0])
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createPiloto = async (req,res) => {
    try{
        await PilotoModel.create(req.body)
        res.json({
            "message": "piloto creado"
        })
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updatePiloto = async (req,res) => {
    try{
        await PilotoModel.update(req.body,{
            where: {id: req.params.id}
        })
        res.json({
            "message": "piloto actualizado"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}

//Eliminar un registro
export const deletePiloto = async (req,res) => {
    try{
        await PilotoModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "piloto eliminado"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}

// module.exports = {
//   //Mostrar todos los registros
//   getAllPilotos: async (req, res) => {
//     try {
//       const Pilotos = await models.PilotoModel.findAll();
//       res.json(Pilotos);
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Mostrar un registro
//   getPiloto: async (req, res) => {
//     try {
//       const piloto = await models.PilotoModel.findAll({
//         where: {
//           id: req.params.id,
//         },
//       });
//       res.json(piloto[0]);
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Crear un registro
//   createPiloto: async (req, res) => {
//     try {
//       await models.PilotoModel.create(req.body);
//       res.json({
//         message: "piloto creado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Actualizar un registro
//   updatePiloto: async (req, res) => {
//     try {
//       await models.PilotoModel.update(req.body, {
//         where: { id: req.params.id },
//       });
//       res.json({
//         message: "piloto actualizado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Eliminar un registro
//   deletePiloto: async (req, res) => {
//     try {
//       await models.PilotoModel.destroy({
//         where: { id: req.params.id },
//       });
//       res.json({
//         message: "piloto eliminado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },
// };


