import express, { Router } from 'express'

import {getAllAerolineas,getAerolinea,createAerolinea,updateAerolinea,deleteAerolinea,getVuelosAerolinea,getPilotosAerolinea} from '../controllers/AerolineaController.js'
import {createPasajero,deletePasajero,getAllPasajeros,getPasajero,updatePasajero,misTickets} from '../controllers/PasajeroController.js'
import {createVuelo,deleteVuelo,getAllVuelos,getVuelo,updateVuelo,getViajesVuelo,getAllVuelosViajes} from '../controllers/VueloController.js'
import {createTicket,deleteTicket,getAllTickets,getTicket,updateTicket} from '../controllers/TicketController.js'
import {createViaje,deleteViaje,getAllViajes,getViaje,updateViaje,getAllViajesVuelo,getAllViajesPiloto} from '../controllers/ViajeController.js'
import {createPiloto,deletePiloto,getAllPilotos,getPiloto,updatePiloto,getViajesPiloto} from '../controllers/PilotoController.js'


export const router1 = express.Router()
export const router2 = express.Router()
export const router3 = express.Router()
export const router4 = express.Router()
export const router5 = express.Router()
export const router6 = express.Router()


//PASAJERO CONTROLLER
router1.get("/",getAllPasajeros)
router1.get("/:pasaporte",getPasajero)
router1.get("/mis-tickets/:pasaporte",misTickets)
router1.post("/",createPasajero)
router1.put("/:pasaporte",updatePasajero)
router1.delete("/:pasaporte",deletePasajero)

//AEROLINEA CONTROLLER
router2.get("/",getAllAerolineas)
router2.get("/:codigo",getAerolinea)
router2.get("/vuelos/:codigo",getVuelosAerolinea)
router2.post("/",createAerolinea)
router2.put("/:codigo",updateAerolinea)
router2.delete("/:codigo",deleteAerolinea)

//PILOTO CONTROLLER
router3.get("/",getAllPilotos)
router3.get("/:id",getPiloto)
router3.get("/mis-viajes/:id",getViajesPiloto)
router3.post("/",createPiloto)
router3.put("/:id",updatePiloto)
router3.delete("/:id",deletePiloto)

//TICKET CONTROLLER
router4.get("/",getAllTickets)
router4.get("/:idpasajero",getTicket)
router4.post("/",createTicket)
router4.put("/:idpasajero",updateTicket)
router4.delete("/:idpasajero",deleteTicket)

//VIAJE CONTROLLER
router5.get("/viajes-pilotos",getAllViajesPiloto);
router5.get("/",getAllViajes)
router5.get("/:codigo",getViaje);
router5.get("/info-viaje/:codigo",getAllViajesVuelo);
router5.post("/",createViaje)
router5.put("/:codigo",updateViaje)
router5.delete("/:codigo",deleteViaje)

//VUELO CONTROLLER

router6.get("/codvuelo/:ida/:destino/:dateIn/:dateOut",getAllVuelosViajes)
router6.get("/:codigo",getVuelo) 
router6.get("/viajes/:codigo",getViajesVuelo)
router6.get("/",getAllVuelos)
router6.post("/",createVuelo) 
router6.put("/:codigo",updateVuelo)
router6.delete("/:codigo",deleteVuelo)


// //PASAJERO CONTROLLER
// router1.get("/",pasajeroController.getAllPasajeros)
// router1.get("/:pasaporte",pasajeroController.getPasajero)
// router1.post("/",pasajeroController.createPasajero)
// router1.put("/:pasaporte",pasajeroController.updatePasajero)
// router1.delete("/:pasaporte",pasajeroController.deletePasajero)

// //AEROLINEA CONTROLLER
// router2.get("/",aerolineaController.getAllAerolineas)
// router2.get("/:codigo",aerolineaController.getAerolinea)
// router2.post("/",aerolineaController.createAerolinea)
// router2.put("/:codigo",aerolineaController.updateAerolinea)
// router2.delete("/:codigo",aerolineaController.deleteAerolinea)

// //PILOTO CONTROLLER
// router3.get("/",pilotoController.getAllPilotos)
// router3.get("/:id",pilotoController.getPiloto)
// router3.post("/",pilotoController.createPiloto)
// router3.put("/:id",pilotoController.updatePiloto)
// router3.delete("/:id",pilotoController.deletePiloto)

// //TICKET CONTROLLER
// router4.get("/",ticketController.getAllTickets)
// router4.get("/:idpasajero",ticketController.getTicket)
// router4.post("/",ticketController.createTicket)
// router4.put("/:idpasajero",ticketController.updateTicket)
// router4.delete("/:idpasajero",ticketController.deleteTicket)

// //VIAJE CONTROLLER
// router5.get("/",viajeController.getAllViajes)
// router5.get("/:codigo",viajeController.getViaje)
// router5.post("/",viajeController.createViaje)
// router5.put("/:codigo",viajeController.updateViaje)
// router5.delete("/:codigo",viajeController.deleteViaje)

// //VUELO CONTROLLER
// router6.get("/",vueloController.getAllVuelos)
// router6.get("/:codigo",vueloController.getVuelo)
// router6.post("/",vueloController.createVuelo)
// router6.put("/:codigo",vueloController.updateVuelo)
// router6.delete("/:codigo",vueloController.deleteVuelo)

