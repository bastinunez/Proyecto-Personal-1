import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./home.css"
import Cookies from "universal-cookie"

const cookies =  new Cookies()

const URI_vuelos = "http://localhost:8000/vuelo/";

function SearchVuelos(){
    const navigate = useNavigate()

    const [vuelos, setVuelos] = useState([]);
    useEffect(() => {
        getVuelos();
    }, []);

    //procedimiento para mostrar todos los vuelos
    const getVuelos = async () => {
        const res = await axios.get(URI_vuelos);
        setVuelos(res.data);
    };
    const getOriginCities = (vuelos) => {
        let originCities = vuelos.map( (vuelo) => (vuelo.ciudadorigen));
        return originCities.filter((item, index) => originCities.indexOf(item) === index);
        
    }
    const getDestinationCitites = (vuelos) => {
        const destinationCities = vuelos.map( (vuelo) => (vuelo.ciudaddestino));
        return destinationCities.filter((item, index) => destinationCities.indexOf(item) === index);
    }
    
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

    const recopilarDatos = (e) => {
        e.preventDefault()
        const infoVuelo = {
            originCity: origen,
            destinationCity : destino,
            dateIn : fechaIda,
            dateOut : fechaVuelta
        }
        navigate("/vuelos",{state:{info:infoVuelo, originCities: getOriginCities(vuelos), destinationCities: getDestinationCitites(vuelos)}})
    }

    return(
        <div className="container-fluid p-0 position-relative" style={{"height":"35vh","backgroundColor":"#E6F4F1"}}>
            <div className="row position-absolute top-50 w-100 m-0 p-0" style={{"transform":"translate(0,-50%)"}}>
                <div className="col-1">
                </div>
                <div className="col-10 container-fluid position-relative" style={{"maxWidth":"1062px"}}>
                    <div className="container-fluid rounded p-2" style={{"backgroundColor":"#006D77","top":"50%","left":"50%"}}>
                        <div className="container-fluid text-white p-2">
                            <h2 className="ps-3">Busca tu vuelo</h2>
                            <div className="cont-blue mx-auto bg-transparent" > {/* aqui puede ir el form*/}
                            <form onSubmit={recopilarDatos}>
                                <div className="row">
                                    <div className="col-5 bg-transparent">
                                        <div className="rounded ps-2 pe-2 pt-1 pb-1" style={{"backgroundColor":"#E6F4F1"}}>
                                            <div className="row "> 
                                                <div className="col-6">
                                                    <div className="row" style={{"height":"30%"}}>
                                                        <h1 className="text-search">Origen</h1>
                                                    </div>
                                                    <div className="row" style={{"height":"70%"}}>
                                                        <select id="originCity" defaultValue={'DEFAULT'} onChange={handleOrigen} className="form-select mx-auto" aria-label="Default select example" style={{"width":"90%"}}>
                                                            <option value="DEFAULT" disabled>Ciudad</option>
                                                            {getOriginCities(vuelos).map((city) => (<option key={city} value={city}>{city}</option>))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="row" style={{"height":"30%"}}>
                                                        <h1 className="text-search">Destino</h1>
                                                    </div>
                                                    <div className="row" style={{"height":"70%"}}>
                                                        <select id="destinationCity" defaultValue={'DEFAULT'} onChange={handleDestino} className="form-select mx-auto" aria-label="Default select example" style={{"width":"90%"}}>
                                                            <option value="DEFAULT" disabled>Ciudad</option>
                                                            {getDestinationCitites(vuelos).map((city) => (<option key={city} value={city}>{city}</option>))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 bg-transparent">
                                        <div className="rounded ps-2 pe-2 pt-1 pb-1" style={{"backgroundColor":"#E6F4F1"}}>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="row" style={{"height":"30%"}}>
                                                        <h1 className="text-search">Rango inicio</h1>
                                                    </div>
                                                    <div className="row" style={{"height":"70%"}}>
                                                        <input id="dateIn" type="date" onChange={handleFechaIda} className="input-calendar mx-auto" style={{"width":"90%"}}></input> 
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="row" style={{"height":"30%"}}>
                                                        <h1 className="text-search">Rango final</h1>
                                                    </div>
                                                    <div className="row" style={{"height":"70%"}}>
                                                        <input id="dateOut" type="date" onChange={handleFechaVuelta} className="input-calendar mx-auto" style={{"width":"90%"}}></input> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col position-relative">
                                        <div className="button-search">
                                            <button type="submit" id="buscarVuelos" className="border-0 pt-2 pb-2 ps-3 pe-3 rounded">Buscar</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>
                        
                    
                    </div>
                </div>
                <div className="col-1">

                </div>
            </div>
            
            

        </div>
    );
}
export default SearchVuelos;