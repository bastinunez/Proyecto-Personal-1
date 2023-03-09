import db from "../database/db.js";
import { DataTypes } from "sequelize";
import { TicketModel } from "./Ticket.js";
import PasajeroModel from './Pasajero.js'

const ViajeModel = db.define("viajes", {
    codigo: {type: DataTypes.INTEGER, primaryKey:true},
    codvuelo: { type: DataTypes.STRING },
    costo: { type: DataTypes.INTEGER },
    fecha: { type: DataTypes.DATE },
    piloto1: { type: DataTypes.INTEGER },
    piloto2: { type: DataTypes.INTEGER },
}, {
    timestamps: false
});
ViajeModel.belongsToMany(PasajeroModel,{through:TicketModel})
export default ViajeModel;

// module.exports = (sequelize,DataTypes) => {
//     let ViajeModel = sequelize.define("viajes", {
//         codigo: {type: DataTypes.INTEGER, primaryKey:true},
//         codvuelo: { type: DataTypes.STRING },
//         costo: { type: DataTypes.INTEGER },
//         fecha: { type: DataTypes.DATE },
//         piloto1: { type: DataTypes.INTEGER },
//         piloto2: { type: DataTypes.INTEGER },
//     }, {
//         timestamps: false
//     });
//     ViajeModel.associate = models => {
//         ViajeModel.hasMany(models.TicketModel)
//     }

//     return ViajeModel
// }