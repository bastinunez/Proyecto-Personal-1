//importamos el modelo
import {AerolineaModel, PasajeroModel,TicketModel, ViajeModel, VueloModel} from '../models/Modelos.js';

//Mostrar todos los registros
export const getAllPasajeros = async (req,res) => {
    try{
        const pasajero = await PasajeroModel.findAll()
        res.json(pasajero)
    }
    catch (error){
        res.json( {message: error.message} )
    }
}
export const misTickets = async (req,res) => {
    try{
        const tickets = await PasajeroModel.findAll({
            where:{
                pasaporte: req.params.pasaporte
            },
            include:[{
                model: ViajeModel,
                attributes:["codigo","codvuelo","costo","fecha"],
                include:[{
                    model: VueloModel,
                    as: "vuelos",
                    attributes:["ciudadorigen","ciudaddestino","horasalida","horallegada"],
                    include:[{
                        model: AerolineaModel,
                        as:"aerolineas",
                        attributes:["nombre"]
                    }]
                }]
            }],
            attributes: ["nombre"]
        })
        res.json(tickets[0])
    }
    catch(err){
        res.json({message: err.message})
    }
}

//Mostrar un registro
export const getPasajero = async (req,res) => {
    try{
        const pasajero = await PasajeroModel.findAll({
            where:{
                pasaporte: req.params.pasaporte
            }
        })
        res.json(pasajero[0])
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createPasajero = async (req,res) => {
    try{
        await PasajeroModel.create(req.body)
        res.json({
            "message": "pasajero creado"
        })
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updatePasajero = async (req,res) => {
    try{
        await PasajeroModel.update(req.body,{
            where: {pasaporte: req.params.pasaporte}
        })
        res.json({
            "message": "pasajero actualizado"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}

//Eliminar un registro
export const deletePasajero = async (req,res) => {
    try{
        await PasajeroModel.destroy({
            where: {pasaporte: req.params.pasaporte}
        })
        res.json({
            "message": "pasajero eliminado"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}


// module.exports = {
//   //Mostrar todos los registros
//   getAllPasajeros: async (req, res) => {
//     try {
//       const pasajero = await PasajeroModel.findAll();
//       res.json(pasajero);
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },
//   misTickets: async (req, res) => {
//     try {
//       const tickets = await PasajeroModel.findAll({
//         where: {
//           pasaporte: req.params.pasaporte,
//         },
//         include: [
//           {
//             model: models.TicketModel,
//           },
//         ],
//       });
//       res.json(tickets);
//     } catch (err) {
//       res.json({ message: err.message });
//     }
//   },

//   //Mostrar un registro
//   getPasajero: async (req, res) => {
//     try {
//       const pasajero = await PasajeroModel.findAll({
//         where: {
//           pasaporte: req.params.pasaporte,
//         },
//         include: [
//           {
//             model: TicketModel,
//           },
//         ],
//       });
//       res.json(pasajero[0]);
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Crear un registro
//   createPasajero: async (req, res) => {
//     try {
//       await PasajeroModel.create(req.body);
//       res.json({
//         message: "pasajero creado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Actualizar un registro
//   updatePasajero: async (req, res) => {
//     try {
//       await PasajeroModel.update(req.body, {
//         where: { pasaporte: req.params.pasaporte },
//       });
//       res.json({
//         message: "pasajero actualizado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Eliminar un registro
//   deletePasajero: async (req, res) => {
//     try {
//       await PasajeroModel.destroy({
//         where: { pasaporte: req.params.pasaporte },
//       });
//       res.json({
//         message: "pasajero eliminado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },
// };

