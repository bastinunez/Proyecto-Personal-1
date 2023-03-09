//importamos el modelo
import {ViajeModel, VueloModel, AerolineaModel, PilotoModel} from '../models/Modelos.js';
import {Sequelize} from "sequelize"
const Op=Sequelize.Op;


//Mostrar todos los vuelos
export const getAllVuelos = async (req,res) => {
    try{
        const vuelos = await VueloModel.findAll()
        res.json(vuelos)
    }
    catch (error){
        res.json( {message: error.message} )
    }
}
//Mostrar info de un codvuelo
export const getAllVuelosViajes = async (req,res) => {
    try{
        const viajes = await VueloModel.findAll({
            where:{
                ciudadorigen:req.params.ida,
                ciudaddestino: req.params.destino,
            },
            include:[{
                model:ViajeModel,
                as:"viajes",
                include:[{
                    model:PilotoModel,
                    as:"pilotos_p1"
                },
                {
                    model:PilotoModel,
                    as:"pilotos_p2"
                }],
                where:{
                    fecha: {[Op.between]:[req.params.dateIn,req.params.dateOut]}
                }
            },
            {
                model: AerolineaModel,
                as:"aerolineas",
                attributes:["nombre"]
            }]
        })
        res.json(viajes)
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getVuelo = async (req,res) => {
    try{
        const vuelo = await VueloModel.findAll({
            where:{
                codigo: req.params.codigo
            }
        })
        res.json(vuelo[0])
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Mostrar info de un codvuelo
export const getViajesVuelo = async (req,res) => {
    try{
        const viaje = await VueloModel.findAll({
            where:{
                codigo: req.params.codigo
            },
            include:[{
                model:ViajeModel,
                as:"viajes"
            }]
        })
        res.json(viaje[0])
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createVuelo = async (req,res) => {
    try{
        await VueloModel.create(req.body)
        res.json({
            "message": "Vuelo creado"
        })
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updateVuelo = async (req,res) => {
    try{
        await VueloModel.update(req.body,{
            where: {codigo: req.params.codigo}
        })
        res.json({
            "message": "Vuelo actualizado"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}

//Eliminar un registro
export const deleteVuelo = async (req,res) => {
    try{
        await VueloModel.destroy({
            where: {codigo: req.params.codigo}
        })
        res.json({
            "message": "Vuelo eliminado"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}

// module.exports = {
//   //Mostrar todos los registros
//   getAllVuelos: async (req, res) => {
//     try {
//       const vuelos = await VueloModel.findAll();
//       res.json(vuelos);
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Mostrar un registro
//   getVuelo: async (req, res) => {
//     try {
//       const vuelo = await VueloModel.findAll({
//         where: {
//           codigo: req.params.codigo,
//         },
//       });
//       res.json(vuelo[0]);
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Crear un registro
//   createVuelo: async (req, res) => {
//     try {
//       await VueloModel.create(req.body);
//       res.json({
//         message: "Vuelo creado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Actualizar un registro
//   updateVuelo: async (req, res) => {
//     try {
//       await VueloModel.update(req.body, {
//         where: { codigo: req.params.codigo },
//       });
//       res.json({
//         message: "Vuelo actualizado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Eliminar un registro
//   deleteVuelo: async (req, res) => {
//     try {
//       await VueloModel.destroy({
//         where: { codigo: req.params.codigo },
//       });
//       res.json({
//         message: "Vuelo eliminado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },
// };


