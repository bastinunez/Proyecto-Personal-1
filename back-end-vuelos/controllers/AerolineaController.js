
//importamos el modelo
import {AerolineaModel, PilotoModel, VueloModel} from '../models/Modelos.js';



//Mostrar todos los registros
export const getAllAerolineas = async (req,res) => {
    try{
        const aerolineas = await AerolineaModel.findAll()
        res.json(aerolineas)
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getAerolinea = async (req,res) => {
    try{
        const aerolinea = await AerolineaModel.findAll({
            where:{
                codigo: req.params.codigo
            }
        })
        res.json(aerolinea[0])
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Mostrar los vuelos de la aerolinea
export const getVuelosAerolinea = async (req,res) => {
    try{
        const aerolinea = await AerolineaModel.findAll({
            include:[{
                model:VueloModel,
                as:"vuelos"
            }],
            where: {
                codigo:req.params.codigo
            }
        })
        res.json(aerolinea[0])
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Mostrar los pilotos de la aerolinea
export const getPilotosAerolinea = async (req,res) => {
    try{
        const aerolinea = await AerolineaModel.findAll({
            include:[{
                model:PilotoModel,
                as:"pilotos"
            }],
            where: {
                codigo:req.params.codigo
            }
        })
        res.json(aerolinea)
    }
    catch (error){
        res.json( {message: error.message} )
    }
}


//Crear un registro
export const createAerolinea = async (req,res) => {
    try{
        await AerolineaModel.create(req.body)
        res.json({
            "message": "aerolinea creada"
        })
    }
    catch (error){
        res.json( {message: error.message} )
    }
}

//Actualizar un registro
export const updateAerolinea = async (req,res) => {
    try{
        await AerolineaModel.update(req.body,{
            where: {codigo: req.params.codigo}
        })
        res.json({
            "message": "aerolinea actualizada"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}

//Eliminar un registro
export const deleteAerolinea = async (req,res) => {
    try{
        await AerolineaModel.destroy({
            where: {codigo: req.params.codigo}
        })
        res.json({
            "message": "aerolinea eliminada"
        })
    }catch (error){
        res.json( {message: error.message} )
    }
}


// module.exports = {
//     //Mostrar todos los registros
//     getAllAerolineas : async (req,res) => {
//         try{
//             const aerolineas = await models.AerolineaModel.findAll()
//             res.json(aerolineas)
//         }
//         catch (error){
//             res.json( {message: error.message} )
//         }
//     },

//     //Mostrar un registro
//     getAerolinea : async (req,res) => {
//         try{
//             const aerolinea = await models.AerolineaModel.findAll({
//                 where:{
//                     codigo: req.params.codigo
//                 }
//             })
//             res.json(aerolinea[0])
//         }
//         catch (error){
//             res.json( {message: error.message} )
//         }
//     },

//     //Crear un registro
//     createAerolinea : async (req,res) => {
//         try{
//             await models.AerolineaModel.create(req.body)
//             res.json({
//                 "message": "aerolinea creada"
//             })
//         }
//         catch (error){
//             res.json( {message: error.message} )
//         }
//     },

//     //Actualizar un registro
//     updateAerolinea : async (req,res) => {
//         try{
//             await models.AerolineaModel.update(req.body,{
//                 where: {codigo: req.params.codigo}
//             })
//             res.json({
//                 "message": "aerolinea actualizada"
//             })
//         }catch (error){
//             res.json( {message: error.message} )
//         }
//     },

//     //Eliminar un registro
//     deleteAerolinea : async (req,res) => {
//         try{
//             await models.AerolineaModel.destroy({
//                 where: {codigo: req.params.codigo}
//             })
//             res.json({
//                 "message": "aerolinea eliminada"
//             })
//         }catch (error){
//             res.json( {message: error.message} )
//         }
// }

// }

