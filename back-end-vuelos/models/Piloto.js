import db from "../database/db.js";
import { DataTypes } from "sequelize";

export const PilotoModel = db.define("pilotos", {
    id: {type: DataTypes.INTEGER, primaryKey:true},
    nombre: { type: DataTypes.STRING },
    codal: { type: DataTypes.INTEGER },
}, {
    timestamps: false
});


// module.exports = (sequelize,DataTypes) => {
//     const PilotoModel = sequelize.define("pilotos", {
//         id: {type: DataTypes.INTEGER, primaryKey:true},
//         nombre: { type: DataTypes.STRING },
//         codal: { type: DataTypes.INTEGER },
//     }, {
//         timestamps: false
//     });

//     return PilotoModel
// }