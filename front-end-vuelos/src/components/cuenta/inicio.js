import React ,{ useRef, useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./cesion.css";
import "../navbar/index.js";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import AutenticarContext from "../../context/AutenticarContext.js";

const URI = "http://localhost:8000/pasajero/";

export const InicioCesion = ({boolCompra,codviaje}) => {
    //USECONTEXT
    const {user, editUser, handleAuth} = useContext(AutenticarContext);

    //para guardar el nombre
    const nameRef = useRef();
    const pasaporteRef = useRef();
    const navigate = useNavigate();

    //para obtener los pasajeros
    const [pasajeros, setPasajeros] = useState([]);
    useEffect(() => {
        getPasajeros();
    }, []);

    //procedimiento para mostrar todos los aerolineas
    const getPasajeros = async () => {
        const res = await axios.get(URI);
        setPasajeros(res.data);
    };
    
    const verificar = async (event) => {
        event.preventDefault();     //PARA QUE NO SE REFRESQUE LA PAGINA
        const pasaporte=pasaporteRef.current.value
        await axios.get(`${URI}${pasaporte}`)
        .then(response=>{
                if(response.data === ""){
                    alert("el usuario o contraseña incorrecta")
                }
                else{
                    handleAuth()
                    editUser({name: response.data.nombre, pais: response.data.pais, pasaporte: response.data.pasaporte})
                    if(boolCompra){
                        navigate("/comprar-ticket",{state:{codviaje:codviaje}})
                    }
                    else{
                        navigate("/")
                    }
                    
                }
            })
    }

    function goToRegistrar(){
        navigate("/sign-in")
    }

    return(
       <div className="container-fluidw-100 m-0 p-0">
            <div className="barra">
            </div>
            <div className="row container-row">
                <div className="col-6 pt-5">
                    <div className="form-inicio mt-5 mx-auto">
                        <div className="container-form">
                            <form onSubmit={verificar}>
                                <div className="mb-4">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="name" ref={nameRef}  minLength={"3"} pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" required="required"/>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Pasaporte</label>
                                    <input type="password" className="form-control" id="pasaporte" ref={pasaporteRef} required="required" pattern="[0-9]+"/>
                                </div>
                                <button type="submit" className="button-register">Submit</button>
                                <div id="div-oculto" >
                                    <p>Inicio de sesion completado</p>
                                </div>
                            </form>    
                        </div>
                    </div>
                    <div className="contrasenas">
                        <div className="cont-cuenta mx-auto">
                            <a onClick={goToRegistrar}>¿Aún no tienes tu cuenta?Regístrate</a>
                        </div>
                    </div>
                </div>
                <div className="col-6 bg-white p-0 m-0">
                    <div className="img-container h-auto">
                        <img className="img-vuelo" alt="img-login" src="https://images.unsplash.com/photo-1564689510742-4e9c7584181d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bnViZXMlMjBkZSUyMGF2aW9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
                    </div>
                    
                </div>
            </div>
            <footer className="footer-inicio">
                <div className="container w-100 m-0 p-0 h-100 d-grid">
                    <div className="container-footer">
                        <MdOutlineAirplaneTicket className="logo"/>
                    </div>
                </div>
            </footer>
       </div> 
    )
}