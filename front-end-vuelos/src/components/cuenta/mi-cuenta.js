import "./cesion.css";
import {FaRegUserCircle} from "react-icons/fa";
import {RiUserLine} from "react-icons/ri";
import {HiOutlineTicket} from "react-icons/hi";
import {AiOutlinePoweroff} from "react-icons/ai";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Ticket} from "../ticket/indexTicket.js";
import Cookies from "universal-cookie";
import AutenticarContext from '../../context/AutenticarContext.js'
import {Footer} from "../footer/index.js"

const URI_pasajero = "http://localhost:8000/pasajero/";
const cookies = new Cookies();

export const MiCuenta = () => {
    const [tickets, setTickets] = useState([]);
    const {user, editUser, handleAuth} = useContext(AutenticarContext);
    const navigate = useNavigate();

    const info={
        option_selected: cookies.get("info").option_selected
    }
    const setButtonActive = () =>{
        var Alinks = document.getElementsByClassName("button-option")
        for(var i = 0; i<Alinks.length;i++){
            if(Alinks[i].id ===  info.option_selected){
                let divBtnActive = document.getElementById(info.option_selected);
                if (divBtnActive){
                    divBtnActive.style.borderLeft="3px solid #495057"
                }
            }
        }
        
    }
    setButtonActive()
    useEffect(() => {
        const getTickets = async () => {
            const res = await axios.get(`${URI_pasajero+"mis-tickets/"}${user.pasaporte}`);
            setTickets(res.data.viajes);
        };
        getTickets();
    }, [info.pasaporte]);
    function updateBorder(){
        var Alinks = document.getElementsByClassName("button-option")
        for(var i = 0; i<Alinks.length;i++){
            if(Alinks[i].id ===  info.option_selected){
                let divBtnActive = document.getElementById(info.option_selected);
                if (divBtnActive){
                    divBtnActive.style.borderLeft="0"
                }
            }
        }
    }
    const showMisDatos = (e) => {
        updateBorder()
        var datos = document.getElementById("show-mis-datos"); 
        var y = document.getElementById("show-mis-tickets");
        if(y && datos){
            y.style.display = "none";
            if (datos.style.display === "none") {
                datos.style.display = "block";
            } else {
                datos.style.display = "none";
            }
        }
    }
    const showMisTickets = (e) => {
        updateBorder()
        var x = document.getElementById("show-mis-tickets");
        var datos = document.getElementById("show-mis-datos")
        if(x && datos){
            x.style.display = "block";
            datos.style.display = "none";
        } 
    }
    function cerrarSesion(){
        let divBtnCerrar = document.getElementById("button-cerrar-sesion");
        if (divBtnCerrar) {
        divBtnCerrar.style.display = "none";
        let divBtnRegistrar = document.getElementById("button-sign-in");
        let divBtnIniciarSesion = document.getElementById("button-sign-up");
        divBtnRegistrar.style.display = "flex";
        divBtnIniciarSesion.style.display = "flex";
        handleAuth();
        editUser({
            name: "",
            pais: "",
            pasaporte: null}
        );
        navigate("/");
        }
    }
    
    return(
        <div className="container-cuenta m-0 p-0">
            <div className="ms-0 pt-1 ps-5 border-bottom bg-light">
                <nav aria-label="breadcrumb" className="container-fluid pt-3">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <a className="breadcrumb-text" href="/">
                        Home
                    </a>
                    </li>
                    <li className="breadcrumb-item">
                    <a className="breadcrumb-text" href="/mi-cuenta">
                        Mi Cuenta
                    </a>
                    </li>
                </ol>
                </nav>
            </div>
            <div className="content-cuenta m-0 p-0" style={{"backgroundColor":"#eeeeef"}}>
                <div className="row m-0 p-0 pb-5">
                    <div className="col" id="col-cuenta">
                    </div>
                    <div className="col-2" id="menu">
                        <div className="content-my-account">
                            <div className="container-menu">
                                <div className="datos-cuenta">
                                    <div className="box-icono">
                                        <FaRegUserCircle className="icon-user"/>
                                    </div>
                                    <div className="box-datos">
                                        <h6 style={{"margin":"0"}}>{user.name}</h6>
                                        <p style={{"margin":"0","fontSize":"1rem"}}>Pasaporte: {user.pasaporte}</p>
                                    </div>
                                </div>
                                <div className="list-options">
                                    <button id="btn-mis-datos" onClick={showMisDatos} className="button-option" ><RiUserLine className="icon-list-options"/>Mis Datos</button>
                                    <button id="btn-mis-tickets" onClick={showMisTickets} className="button-option"><HiOutlineTicket className="icon-list-options"/>Mis tickets</button>
                                    <button id="btn-cerrar" onClick={cerrarSesion} className="button-option"><AiOutlinePoweroff className="icon-list-options"/>Cerrar sesion</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" style={{"padding":"0.75rem"}}>
                        <div id="show-mis-tickets">
                            <Ticket tickets={tickets}/>
                        </div>
                        <div id="show-mis-datos" style={{"display":"none"}}>
                            <div className="content-datos">
                                <div className="datos-personales">
                                    <div className="title">
                                        <h3>Datos Personales</h3>
                                    </div>
                                    <div className="grid-datos">
                                        <div className="div-nombre">
                                            <label>Nombre</label>
                                            <input className="input-datos" placeholder={user.name}></input>
                                        </div>
                                        <div className="div-pais">
                                            <label>País</label>
                                            <input className="input-datos" placeholder={user.pais}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="guardar-datos">
                                    <div className="div-btn-guardar">
                                        <button type="submit" className="btn-guardar" id="datos-personales">
                                            Guardar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}