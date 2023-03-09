import db from "../database/db.js";
import { DataTypes } from "sequelize";

export const VueloModel = db.define("vuelos", {
    codigo: { type: DataTypes.STRING, primaryKey:true },
    codal: { type: DataTypes.INTEGER },
    ciudadorigen: { type: DataTypes.STRING },
    ciudaddestino: { type: DataTypes.STRING },
    horasalida: { type: DataTypes.STRING },
    horallegada: { type: DataTypes.STRING },
}, {
    timestamps: false
});

// module.exports = (sequelize,DataTypes) => {
//     let VueloModel = sequelize.define("vuelos", {
//         codigo: { type: DataTypes.STRING, primaryKey:true },
//         codal: { type: DataTypes.INTEGER },
//         ciudadorigen: { type: DataTypes.STRING },
//         ciudaddestino: { type: DataTypes.STRING },
//         horasalida: { type: DataTypes.STRING },
//         horallegada: { type: DataTypes.STRING },
//     }, {
//         timestamps: false
//     });

//     return VueloModel
// }