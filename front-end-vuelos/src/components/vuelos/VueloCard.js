import "./vuelos.css"
import {useNavigate} from "react-router-dom";
import {useContext} from 'react'
import { MdAirplanemodeActive } from "react-icons/md";
import {TbBackpack,TbArrowBigRightLine} from 'react-icons/tb'
import {CiRollingSuitcase} from 'react-icons/ci'
import {RiSuitcase2Line} from 'react-icons/ri'
import BusquedaContext from "../../context/BusquedaContext";

function VueloCard({info}){
    const {vueloCompra, editVueloCompra} = useContext(BusquedaContext);
    const navigate =  useNavigate();
    const fecha_new =  info.viajes[0].fecha
    
    function goToBuyTicket (){
        navigate("/comprar-ticket",{state:{codviaje:info.viajes[0].codigo, info:info}})
    }

    return(
        <div className="container-vuelo-card" id="vuelo-card">
            <div className="row" id="vuelo-card">
                <div className="col-10 col-logo-content"> {/*LOGO,CONTENIDO*/}
                    <div className="row-variado">
                        <div className="logo-aerolinea" id="vuelo">
                            <div className="img-aerolinea" id="vuelo">
                                <MdAirplanemodeActive/>
                            </div>
                            <div className="name-aerolinea" id="vuelo">
                                <p id="name-aerolinea">{info.aerolineas.nombre}</p>
                            </div>
                        </div>
                        <div className="ida-ciudades">
                            <p className="text-ida">IDA</p>
                            <p className="text-ciudades">{info.ciudadorigen}-{info.ciudaddestino}</p>
                        </div>
                        <div className="fecha-vuelo">
                            <p className="text-fecha m-0 p-0">{fecha_new.substring(0,10)}</p>
                        </div>
                        <div className="hora-vuelo">
                            <p className="text-hora-salida m-0 p-0">{info.horasalida}</p>
                        </div>
                    </div>
                </div>
                <div className="col-2 col-logo-content"> {/*COSTO*/}
                    <div className="block-costo" id="costo">
                        <div className="d-desde">
                            <p className="desde" id="">Desde:</p>
                        </div>
                        <div className="costo-pasaje">
                            <p className="costo">${info.viajes[0].costo}</p>
                        </div>
                        <div className="ver-info">
                            <a className="a-ver-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Más información</a>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable modal-size">
                                    <div className="modal-content modal-size">
                                        <div className="modal-header">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container container-info p-2">
                                                <div className="content p-2 w-100">
                                                    <div className="info-equipaje">
                                                        <div className="border-end pe-4 me-2">
                                                            <p>Equipaje</p>
                                                        </div>
                                                        <div className="w-100">
                                                            <ul className="m-0 p-0 ms-4">
                                                                <li className="mb-2">
                                                                    <div className="d-flex">
                                                                        <div className="box-backpack align-items-center justify-content-center d-flex pe-1 ps-1">
                                                                            <TbBackpack className="icon-equipaje"/>
                                                                        </div>
                                                                        <div className="luggage-item-content">
                                                                        <div className="luggage-item-title"> 
                                                                                Incluye una mochila o cartera
                                                                            </div>
                                                                            <div className="luggage-item-description">
                                                                                <p className="p-0 m-0"> Debe caber bajo el asiento delantero. </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="mb-2">
                                                                    <div className="d-flex">
                                                                        <div className="box-backpack align-items-center justify-content-center d-flex pe-1 ps-1">
                                                                            <CiRollingSuitcase className="icon-equipaje"/>
                                                                        </div>
                                                                        <div className="luggage-item-content">
                                                                            <div className="luggage-item-description">
                                                                                <p className="p-0 m-0">No incluye equipaje de mano</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="mb-2">
                                                                    <div className="d-flex">
                                                                        <div className="box-backpack align-items-center justify-content-center d-flex pe-1 ps-1">
                                                                            <RiSuitcase2Line className="icon-equipaje"/>
                                                                        </div>
                                                                        <div className="luggage-item-content">
                                                                            <div className="luggage-item-description">
                                                                                <p className="p-0 m-0">No incluye equipaje en bodega</p>
                                                                            </div>
                                                                            <div className="luggage-item-description">
                                                                                <p className="p-0 m-0">Podrás sumar maletas en el aeropuerto por un cargo extra.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container container-info d-block p-0">
                                                <div className="info-aerolinea-modal">
                                                    <div className="container">
                                                        <div className="content-info-aerolinea-modal mt-1 mb-1 d-flex w-100" id="modal">
                                                            <div className="img-aerolinea" id="modal">
                                                                <MdAirplanemodeActive className="w-100 h-100 pe-2"/>
                                                            </div>
                                                            <div className="justify-content-between w-100 d-flex">
                                                                <div className="name-aerolinea" id="modal">
                                                                    <p className="name-aerolinea-modal">{info.aerolineas.nombre}</p>
                                                                </div>
                                                                <div className="">
                                                                    <ul className="mb-1" style={{"fontSize":"13px"}}>
                                                                        <li>Codigo vuelo: {info.codigo}</li>
                                                                        <li>Piloto 1: {info.viajes[0].pilotos_p1.nombre}</li>
                                                                        <li>Piloto 2: {info.viajes[0].pilotos_p2.nombre}</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="info-vuelo-modal p-3 w-100">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="info-hora-wrapper flex-column p-0 m-0">
                                                            <p className="p-0 m-0 show-day-modal">{fecha_new.substring(0,10)}</p>
                                                            <p className="p-0 m-0 show-time-modal">{info.horasalida}</p>
                                                            <p className="m-0 show-city-modal">{info.ciudadorigen}</p>
                                                        </div>
                                                        <div className="align-items-center d-flex text-color-primario-page" style={{"width":"5%"}}>
                                                            <TbArrowBigRightLine className="w-100 h-100"/>
                                                        </div>
                                                        <div className="info-hora-wrapper flex-column">
                                                            <p className="p-0 m-0 show-day-modal">{fecha_new.substring(0,10)}</p>
                                                            <p className="p-0 m-0 show-time-modal">{info.horallegada}</p>
                                                            <p className="m-0 show-city-modal">{info.ciudaddestino}</p>
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div className="container container-info p-0 bg-color-primario-page justify-content-center">
                                                <div className="p-2">
                                                    <p className="show-costo-modal p-0 m-0">
                                                        Costo ticket: {info.viajes[0].costo} pesos
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="button" onClick={goToBuyTicket} data-bs-dismiss="modal" className="btn bg-color-secundario-page text-white">Comprar ticket</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VueloCard;