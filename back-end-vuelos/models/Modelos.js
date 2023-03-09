//Users tablas

//importamos la conexion de la DB
import db from "../database/db.js";
import { DataTypes } from "sequelize";

// db.define("nombreTabla",{ atributo: {type:DataTypes.tipo}, ... })
/*
    timestamps sirve en caso de no usar las columnas createdAt, updatedAt.

    Otra manera de definir esto es en db.js, que define para todos los modelos:

    var sequelize = new Sequelize('sequelize_test', 'root', null, {
    host: "127.0.0.1",
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
*/

// module.exports = (sequelize,DataTypes) => {
//     let AerolineaModel = sequelize.define("aerolineas", {
//         codigo: { type: DataTypes.INTEGER , primaryKey:true},
//         nombre: { type: DataTypes.STRING },
//         pais: { type: DataTypes.STRING },
//     }, {
//         timestamps: false
//     });

//     return AerolineaModel
// }

const AerolineaModel = db.define(
  "aerolineas",
  {
    codigo: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    pais: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);
const VueloModel = db.define(
    "vuelos",
    {
      codigo: { type: DataTypes.STRING, primaryKey: true },
      codal: { type: DataTypes.INTEGER },
      ciudadorigen: { type: DataTypes.STRING },
      ciudaddestino: { type: DataTypes.STRING },
      horasalida: { type: DataTypes.STRING },
      horallegada: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
    }
  );

const PilotoModel = db.define(
  "pilotos",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING },
    codal: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
  }
);
const PasajeroModel = db.define(
    "pasajeros",
    {
      pasaporte: { type: DataTypes.INTEGER, primaryKey: true },
      nombre: { type: DataTypes.STRING },
      pais: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
    }
  );
const ViajeModel = db.define(
  "viajes",
  {
    codigo: { type: DataTypes.INTEGER, primaryKey: true },
    codvuelo: { type: DataTypes.STRING },
    costo: { type: DataTypes.INTEGER },
    fecha: { type: DataTypes.DATE },
    piloto1: { type: DataTypes.INTEGER },
    piloto2: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
  }
);
const TicketModel = db.define(
  "tickets",
  {
    idpasajero: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    codviaje: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
  },
  {
    timestamps: false,
  }
);

//MANY TO MANY
PasajeroModel.belongsToMany(ViajeModel, {through: TicketModel,foreignKey:"idpasajero"});
ViajeModel.belongsToMany(PasajeroModel, {through: TicketModel,foreignKey:"codviaje"});

//ONE TO MANY: una aerolinea tiene varios pilotos
AerolineaModel.hasMany(PilotoModel,{as:"pilotos",foreignKey:"codal"})
PilotoModel.belongsTo(AerolineaModel,{as:"aerolineas",foreignKey:"codal"})

//ONE TO MANY: una aerolinea participa en varios vuelos
AerolineaModel.hasMany(VueloModel,{as:"vuelos",foreignKey:"codal"})
VueloModel.belongsTo(AerolineaModel,{as:"aerolineas",foreignKey:"codal"})

//ONE TO MANY: un piloto participa en varios viajes
PilotoModel.hasMany(ViajeModel,{as:"viajes_p1",foreignKey:"piloto1"})
ViajeModel.belongsTo(PilotoModel,{as:"pilotos_p1",foreignKey:"piloto1"})

//ONE TO MANY: un piloto participa en varios viajes
PilotoModel.hasMany(ViajeModel,{as:"viajes_p2",foreignKey:"piloto2"})
ViajeModel.belongsTo(PilotoModel,{as:"pilotos_p2",foreignKey:"piloto2"})

//ONE TO MANY: un vuelo tiene varios viajes
VueloModel.hasMany(ViajeModel,{as:"viajes",foreignKey:"codvuelo"})
ViajeModel.belongsTo(VueloModel,{as:"vuelos",foreignKey:"codvuelo"})


export {
  PasajeroModel,
  ViajeModel,
  AerolineaModel,
  VueloModel,
  PilotoModel,
  TicketModel,
};
