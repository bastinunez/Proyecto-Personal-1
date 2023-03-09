import db from "../database/db.js";
import { DataTypes } from "sequelize";

export const TicketModel = db.define(
  "tickets",
  {
    idpasajero: { type: DataTypes.INTEGER, primaryKey: true,},
    codviaje: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
  }
);

// module.exports = (sequelize,DataTypes) => {
//     let TicketModel = sequelize.define("tickets", {
//         idpasajero: { type: DataTypes.INTEGER, primaryKey:true },
//         codviaje: { type: DataTypes.INTEGER },
//     }, {
//         timestamps: false
//     });
//     TicketModel.associate = models => {
//         TicketModel.belongsToMany(models.PasajeroModel)
//         TicketModel.belongsToMany(models.ViajeModel)
//     }

//     return TicketModel
// }
