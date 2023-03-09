import {useEffect, useContext} from "react";
import "../home/home.css"
import SearchVuelos from "./buscadorVuelos";
import Contenido from "./contentHome";
import {Footer} from "../footer/index.js"
import AutenticarContext from "../../context/AutenticarContext.js";


export function activarDivCuenta(){
    let divBtnRegistrar = document.getElementById("button-sign-in");
    let divBtnIniciarSesion = document.getElementById("button-sign-up");
    if(divBtnRegistrar && divBtnIniciarSesion){
        divBtnRegistrar.style.display="none";
        divBtnIniciarSesion.style.display="none";
        let divBtnCerrar = document.getElementById("button-cerrar-sesion");
        if(divBtnCerrar){
            divBtnCerrar.style.display="flex";
        }
    }
}

function HomeList({prop}){
    const {user, auth} = useContext(AutenticarContext);

    document.title = "Inicio"
    useEffect((e) => {
        if(auth){
            activarDivCuenta(auth);
        }
    }, [auth]);
    
    return(
    <div className="container-fluid m-0 p-0">
        <SearchVuelos/>
        <Contenido/>
        <Footer/>
    </div>
    );
}
export default HomeList;