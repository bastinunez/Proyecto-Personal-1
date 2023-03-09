import React, {useContext} from "react";
import { useLocation} from "react-router-dom";
import {VuelosList} from "../components/vuelos/showVuelos.js";
import  {BusquedaProvider} from '../context/BusquedaContext.js';

const Vuelos = () =>{
    return(
        <BusquedaProvider>
            <div className="bg-light">
                <VuelosList/>
            </div>
        </BusquedaProvider>
    )
}
export default Vuelos;