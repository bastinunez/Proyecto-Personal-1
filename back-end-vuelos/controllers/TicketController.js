//importamos el modelo
import {TicketModel} from '../models/Modelos.js';


//Mostrar todos los registros
export const getAllTickets = async (req,res) => {
    try{
        const Ticket = await TicketModel.findAll()
        res.json(Ticket)
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Mostrar todos tickets de un pasajero
export const getTicket = async (req,res) => {
    try{
        const ticket = await TicketModel.findAll({
            where:{
                idpasajero: req.params.idpasajero
            }
        })
        res.json(ticket)
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Crear un registro
export const createTicket = async (req,res) => {
    try{
        await TicketModel.create(req.body)
        res.json({
            "message": "ticket creado"
        })
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updateTicket = async (req,res) => {
    try{
        await TicketModel.update(req.body,{
            where: {idpasajero: req.params.idpasajero}
        })
        res.json({
            "message": "ticket actualizado"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}

//Eliminar un registro
export const deleteTicket = async (req,res) => {
    try{
        await TicketModel.destroy({
            where: {idpasajero: req.params.idpasajero}
        })
        res.json({
            "message": "ticket eliminado"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}

// module.exports = {
//   //Mostrar todos los registros
//   getAllTickets: async (req, res) => {
//     try {
//       const Ticket = await TicketModel.findAll();
//       res.json(Ticket);
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Mostrar todos tickets de un pasajero
//   getTicket: async (req, res) => {
//     try {
//       const ticket = await TicketModel.findAll({
//         where: {
//           idpasajero: req.params.idpasajero,
//         },
//       });
//       res.json(ticket);
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Crear un registro
//   createTicket: async (req, res) => {
//     try {
//       await TicketModel.create(req.body);
//       res.json({
//         message: "ticket creado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Actualizar un registro
//   updateTicket: async (req, res) => {
//     try {
//       await TicketModel.update(req.body, {
//         where: { idpasajero: req.params.idpasajero },
//       });
//       res.json({
//         message: "ticket actualizado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },

//   //Eliminar un registro
//   deleteTicket: async (req, res) => {
//     try {
//       await TicketModel.destroy({
//         where: { idpasajero: req.params.idpasajero },
//       });
//       res.json({
//         message: "ticket eliminado",
//       });
//     } catch (error) {
//       res.json({ message: error.message });
//     }
//   },
// };


