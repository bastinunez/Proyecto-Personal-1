const {AerolineaModel} = require("../models/AerolineasModels")
const {PasajeroModel} = require("../models/AerolineasModels")
const {PilotoModel} = require("../models/AerolineasModels")
const {TicketModel} = require("../models/AerolineasModels")
const {ViajeModel} = require("../models/AerolineasModels")
const {VueloModel} = require("../models/AerolineasModels")


PasajeroModel.belongsToMany(ViajeModel,{through:TicketModel})
ViajeModel.belongsToMany(PasajeroModel,{through:TicketModel})


VueloModel.hasOne(ViajeModel,{foreignKey:"codvuelo"})
ViajeModel.belongsTo(VueloModel)


module.exports = {
    AerolineaModel,
    PasajeroModel,
    PilotoModel,
    TicketModel,
    ViajeModel,
    VueloModel
}