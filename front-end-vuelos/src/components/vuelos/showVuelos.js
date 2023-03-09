import { useState, useEffect, useContext} from "react";
import axios from "axios";
import { useLocation} from "react-router-dom";
import "./vuelos.css"
import {BiSearch} from 'react-icons/bi'
import {Footer} from "../footer/index.js"
import VueloCard from "./VueloCard.js";
import {VuelosMiniList} from './VuelosList.js'
import BusquedaContext from "../../context/BusquedaContext";

const URI_vuelos = "http://localhost:8000/vuelo/";

export function VuelosList(){
    const {busqueda,editBusqueda, vuelosArray,editVuelos} = useContext(BusquedaContext);
    let location = useLocation();
    const [info, setInfo] = useState(location.state.info);

    const originCities = location.state.originCities;
    const destinationCities =  location.state.destinationCities;

    //Obtener informacion de buscador de vuelos
    const [origen, setOrigen] = useState('');
    const handleOrigen = (event) => {
        setOrigen(event.target.value);
    };
    const [destino, setDestino] = useState('');
    const handleDestino = (event) => {
        setDestino(event.target.value);
    };
    const [fechaIda, setFechaIda] = useState('');
    const handleFechaIda = (event) => {
        setFechaIda(event.target.value);
    };
    const [fechaVuelta, setFechaVuelta] = useState('');
    const handleFechaVuelta = (event) => {
        setFechaVuelta(event.target.value);
    }

    useEffect(() => {
        editBusqueda(location.state.info);
        getVuelos();
    },[]); //ESTO SE ACTUALIZARA CUANDO INFO CAMBIE
    const getVuelos = async () => {
        const res = await axios.get(`${URI_vuelos+"codvuelo/"+info.originCity+"/"+info.destinationCity+"/"+info.dateIn+"/"+info.dateOut}`);
        editVuelos(res.data);
    };

    function recopilarDatos(e){
        editBusqueda({
            originCity: origen,
            destinationCity : destino,
            dateIn : fechaIda,
            dateOut : fechaVuelta
        });
        e.preventDefault()
    }

    return(
        <>
            <div className="container w-100" id="showVuelos">
                <div className="container-vuelos w-100">
                    <div className="container-title-search">
                        <div className="box-title-search">
                            <h2>Pasajes de {busqueda.originCity} a {busqueda.destinationCity}</h2>
                        </div>
                    </div>
                    <div className="container-content-vuelos">
                        <div className="row mb-5">
                            <div className="col-3">
                                <div className="container-filter">
                                    <div className="form-box-filter">
                                        <div className="title-form-filter">
                                            <h4>Pasajes en avión</h4>
                                        </div>
                                        <form>
                                            <div className="inputGroup">
                                                <label htmlFor="origen">Origen</label>
                                                <select id="originCity" defaultValue={'DEFAULT'} onChange={handleOrigen} className="form-select mx-auto" aria-label="Default select example" style={{"width":"90%"}}>
                                                    <option value="DEFAULT" disabled>Ciudad</option>
                                                    {originCities.map((city) => (<option key={city} value={city}>{city}</option>))}
                                                </select>
                                            </div>
                                            <div className="inputGroup">
                                                <label htmlFor="origen">Destino</label>
                                                <select id="originCity" defaultValue={'DEFAULT'} onChange={handleDestino} className="form-select mx-auto" aria-label="Default select example" style={{"width":"90%"}}>
                                                    <option value="DEFAULT" disabled>Ciudad</option>
                                                    {destinationCities.map((city) => (<option key={city} value={city}>{city}</option>))}
                                                </select>
                                            </div>
                                            <div className="box-select-fechas">
                                                <div className="content-fechas">
                                                    <label className="label-fecha fecha-ida">Rango fecha inicio</label>
                                                    <div className="box-input-calendar calendario-ida">
                                                        <input id="box-input" type="date" onChange={handleFechaIda} className="input-calendar mx-auto"></input>
                                                    </div>
                                                    <label className="label-fecha fecha-fin">Rango fecha fin</label>
                                                    <div className="box-input-calendar calendario-fin">
                                                        <input id="box-input" type="date" onChange={handleFechaVuelta} className="input-calendar mx-auto"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box-button-search mx-auto">
                                                <button type="button" onClick={recopilarDatos} className="btn-search-vuelos mx-auto">
                                                    <div className="p-2"><BiSearch/>Buscar</div>
                                                </button>
                                            </div>
                                        </form>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="rounded bg-white">
                                    <VuelosMiniList vuelosArray={vuelosArray}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}