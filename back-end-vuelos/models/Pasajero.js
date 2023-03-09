import db from "../database/db.js";
import { DataTypes } from "sequelize";
import ViajeModel from "./Viaje.js"
import {TicketModel} from './Ticket.js'

const PasajeroModel = db.define("pasajeros", {
    pasaporte: { type: DataTypes.INTEGER , primaryKey:true},
    nombre: { type: DataTypes.STRING },
    pais: { type: DataTypes.STRING },
}, {
    timestamps: false
});
PasajeroModel.belongsToMany(ViajeModel,{through:TicketModel})
export default PasajeroModel;

//ViajeModel.belongsToMany(PasajeroModel,{through:ViajeModel})

// module.exports = (sequelize,DataTypes) => {
//     let PasajeroModel = sequelize.define("pasajeros", {
//         pasaporte: { type: DataTypes.INTEGER , primaryKey:true},
//         nombre: { type: DataTypes.STRING },
//         pais: { type: DataTypes.STRING },
//     }, {
//         timestamps: false
//     });
//     PasajeroModel.associate = models => {
//         PasajeroModel.hasMany(models.TicketModel)
//     }

//     return PasajeroModel;
// }