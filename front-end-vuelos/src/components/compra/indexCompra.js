import AutenticarContext from '../../context/AutenticarContext.js'
import React ,{ useRef, useState, useEffect, useContext} from "react";
import $, { event } from "jquery";
import axios from "axios";
import {TiTicket} from 'react-icons/ti'
import "./compra.css";
import {Footer} from '../footer/index.js';
import { useLocation } from 'react-router-dom';

const URL_viajes = "http://localhost:8000/viaje/";
const URI = "http://localhost:8000/pasajero/";

export function BuyTicket({codviaje}){
    const {user, auth, handleAuth, editUser} = useContext(AutenticarContext);
    const location = useLocation();
    const info = location.state.info;
    var counter = 0;

    //usando useState
    const [pais, setPais] = useState('');
    const [pasaporte, setPasaporte] = useState('');
    const [nombre, setNombre] = useState('');
    //useEffect
    useEffect(() => {
    },[])

    let  signUpButton = document.getElementById("signUp");
    let  signInButton = document.getElementById("signIn");
    let  container = document.getElementById('container');
    if(signUpButton && signInButton){
        signUpButton.addEventListener("click", () => {
            container.classList.add("right-panel-active");
        });
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }

    const handlePasaporte = (event) => {
        setPasaporte(event.target.value);
    };
    const handleNombre = (event) => {
        setNombre(event.target.value);
    };
    const handlePais = (event) => {
        setPais(event.target.value);
    };

    const verificarCuenta = async (event) =>{
        event.preventDefault();
        await axios.get(`${URI}${pasaporte}`)
        .then(response=>{
            if(response.data === ""){
                alert("El usuario o contraseña incorrecta")
            }
            else{
                editUser({name: response.data.nombre, pais: response.data.pais, pasaporte: response.data.pasaporte});
                handleAuth();
            }
        })
    }
    const registrarCuenta = async (event) => {
        event.preventDefault();
        await axios.post(URI, {pasaporte:pasaporte,nombre:nombre,pais:pais})
        .then(response =>{
            console.log(response.data)
        })
    }

    $(function (){
        $("input[name='inlineRadioOptions']").on("click",function () {
            var checkedValue = $("input[name='inlineRadioOptions']:checked").val();
            $("#collapseOne").removeClass('show');
            $("#collapseTwo").removeClass('show');
            $("#collapseTres").removeClass('show');
            if (checkedValue == "option1") {
                // $("#collapseOne").removeClass('hide');
                $("#collapseOne").addClass('show');
                // $("#collapseTwo").removeClass('show');
                // $("#collapseTwo").addClass('hide');
            } else if (checkedValue == "option2") {
                // $("#collapseOne").removeClass('show');
                // $("#collapseOne").addClass('hide');
                // $("#collapseTwo").removeClass('hide');
                $("#collapseTwo").addClass('show');
    
            } else if (checkedValue == "option3"){
                $("#collapseTres").addClass('show');
            }
        });
    })
    
    

    return(<>
        {auth ? 
        <>
            <div className="bg-light m-0 p-0">
                    <div className="container min-vh-100">
                        <div className="p-3 container justify-content-center">
                            <div className="info-ticket-compra">
                                <div className="border-bottom">
                                    <div className="p-3 d-flex">
                                        <div className="ticket-compra-icon">
                                            <TiTicket className="w-100 h-100 text-color-primario-page"/>
                                        </div>
                                        <div className="w-100">
                                            <h3 className="text-center p-0 m-0">Vuelo {info.ciudadorigen}-{info.ciudaddestino}</h3>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="border-bottom">
                                        <div>
                                            <div className=''>
                                                <h5 className='p-1 ps-3 m-0'>Formas de pago</h5>
                                                <div className="form-check">
                                                    <ul className="m-0">
                                                        <li>
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                            <label className="form-check-label" htmlFor="inlineRadio1">
                                                                Tarjeta Débito
                                                            </label>
                                                            <div id="collapseOne" className="panel-collapse collapse container-collapse">
                                                                <div className='container-form-debito'>
                                                                    <div className='input-type-bank'>
                                                                        <select id="banks" defaultValue={'DEFAULT'}  className="form-select mx-auto" aria-label="Default select example">
                                                                            <option className='h-100' value="DEFAULT" disabled>BANCO</option>
                                                                            <option value={"Estado"}>ESTADO</option>
                                                                            <option value={"Scotiabank"}>SCOTIABANK</option>
                                                                            <option value={"Santander"}>SANTANDER</option>
                                                                            <option value={"BCI"}>BCI</option>
                                                                            <option value={"BANCO CHILE"}>BANCO DE CHILE</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                                            <label className="form-check-label" htmlFor="inlineRadio2">
                                                                Tarjeta Credito
                                                            </label>
                                                            <div id="collapseTwo" className="panel-collapse collapse container-collapse">
                                                                collapse 2
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                                            <label className="form-check-label" htmlFor="inlineRadio3">
                                                                Webpay
                                                            </label>
                                                            <div id="collapseTres" className="panel-collapse collapse container-collapse">
                                                                collapse 3
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                </div>
                                <div className="w-100">
                                    <div className="container p-2 justify-content-between">
                                        <button className="btn-volver-atras">Volver atrás</button>
                                        <button className="btn-confirmar-compra">Confirmar compra</button>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <Footer/>
        </>
        :
        <>
                <div className='min-vh-100 bg-light align-items-center d-flex'>
                    <div className="container" id="container">
                        <div className="form-container sign-up-container">
                            <form className='form-interactive' onSubmit={registrarCuenta}>
                                <h1 className='m-0 p-0 text-center'>Crear Cuenta</h1>
                                <br/>
                                <div className="social-container">
                                    <a className='a-form-new social' href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className='a-form-new social' href="#"><i className="fab fa-google-plus-g"></i></a>
                                    <a className='a-form-new social' href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <br/>
                                <input className='input-form-interactive' type="text" placeholder="Nombre" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" onChange={handleNombre}/>
                                <input className='input-form-interactive' type="text" placeholder="Pasaporte" required onChange={handlePasaporte}/>
                                <input className='input-form-interactive' type="text" placeholder="Pais" required onChange={handlePais}/>
                                <br/>
                                <button className='btn-form-interactive' type='submit'>Registrar</button>
                            </form>
                        </div>
                        <div className="form-container sign-in-container">
                            <form className='form-interactive' onSubmit={verificarCuenta}>
                                <h1 className='m-0 p-0 text-center'>Iniciar Cesion</h1>
                                <br/>
                                <div className="social-container">
                                    <a className='a-form-new social' href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className='a-form-new social' href="#"><i className="fab fa-google-plus-g"></i></a>
                                    <a className='a-form-new social' href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <br/>
                                <span>or use your account</span>
                                <input className='input-form-interactive' type="text" placeholder="Nombre" required onChange={handleNombre}/>
                                <input className='input-form-interactive' type="text" placeholder="Pasaporte" required onChange={handlePasaporte}/>
                                <br/>
                                <a className='a-form-new' href="#" >Forgot your password?</a>
                                <br/>
                                <button type='submit' className='btn-form-interactive'>Entrar</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1 className='m-0 p-0 text-center'>Welcome Back!</h1>
                                    <p className='p-form-interactive'>To keep connected with us please login with your personal info</p>
                                    <button className="ghost btn-form-interactive" id="signIn">Sign In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1 className='m-0 p-0 text-center'>Hello, Friend!</h1>
                                    <p className='p-form-interactive'>Enter your personal details and start journey with us</p>
                                    <button className="ghost btn-form-interactive" id="signUp">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </>} 
    </>)
    if (auth){
        
        return(
            <>
                <div className="bg-light m-0 p-0">
                    <div className="container min-vh-100">
                        <div className="p-3 container justify-content-center">
                            <div className="info-ticket-compra">
                                <div className="border-bottom">
                                    <div className="p-3 d-flex">
                                        <div className="ticket-compra-icon">
                                            <TiTicket className="w-100 h-100 text-color-primario-page"/>
                                        </div>
                                        <div className="w-100">
                                            <h3 className="text-center p-0 m-0">Vuelo {info.ciudadorigen}-{info.ciudaddestino}</h3>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="border-bottom">
                                        <div>
                                            <div>
                                            <   div className="form-check">
                                                    <ul className="m-0">
                                                        <li>    
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio1"/>
                                                            <label className="form-check-label" htmlFor="flexRadio1" >
                                                                Tarjeta Crédito
                                                            </label>
                                                            <div className="collapse collapse-function" id="collapseExample">
                                                                <div className="card card-body">
                                                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>    
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio2"/>
                                                            <label className="form-check-label" htmlFor="flexRadio2">
                                                                Tarjeta Débito
                                                            </label>
                                                            <div className="collapse collapse-function" id="collapseExample">
                                                                <div className="card card-body">
                                                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>    
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio3"/>
                                                            <label className="form-check-label" htmlFor="flexRadio3">
                                                                Webpay
                                                            </label>
                                                        </li>
                                                    </ul>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div className="w-100">
                                    <div className="container p-2 justify-content-between">
                                        <button className="btn-volver-atras">Volver atrás</button>
                                        <button className="btn-confirmar-compra">Confirmar compra</button>
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
    else{
        let  signUpButton = document.getElementById("signUp");
        let  signInButton = document.getElementById("signIn");
        let  container = document.getElementById('container');
        if(signUpButton && signInButton){
            signUpButton.addEventListener("click", () => {
                container.classList.add("right-panel-active");
            });
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        }

        const handlePasaporte = (event) => {
            setPasaporte(event.target.value);
        };
        const handleNombre = (event) => {
            setNombre(event.target.value);
        };
        const handlePais = (event) => {
            setPais(event.target.value);
        };

        const verificarCuenta = async (event) =>{
            event.preventDefault();
            await axios.get(`${URI}${pasaporte}`)
            .then(response=>{
                if(response.data === ""){
                    alert("El usuario o contraseña incorrecta")
                }
                else{
                    handleAuth();
                    editUser({name: response.data.nombre, pais: response.data.pais, pasaporte: response.data.pasaporte});
                }
            })
        }
        const registrarCuenta = async (event) => {
            event.preventDefault();
            await axios.post(URI, {pasaporte:pasaporte,nombre:nombre,pais:pais})
            .then(response =>{
                console.log(response.data)
            })
        }
        return(
            <>
                {/* <SignUp boolCompra={boolCompra} codviaje={codviaje}/> */}
                <div className='min-vh-100 bg-light align-items-center d-flex'>
                    <div className="container" id="container">
                        <div className="form-container sign-up-container">
                            <form className='form-interactive' onSubmit={registrarCuenta}>
                                <h1 className='m-0 p-0 text-center'>Crear Cuenta</h1>
                                <br/>
                                <div className="social-container">
                                    <a className='a-form-new social' href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className='a-form-new social' href="#"><i className="fab fa-google-plus-g"></i></a>
                                    <a className='a-form-new social' href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <br/>
                                <input className='input-form-interactive' type="text" placeholder="Nombre" required pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+" onChange={handleNombre}/>
                                <input className='input-form-interactive' type="text" placeholder="Pasaporte" required onChange={handlePasaporte}/>
                                <input className='input-form-interactive' type="text" placeholder="Pais" required onChange={handlePais}/>
                                <br/>
                                <button className='btn-form-interactive' type='submit'>Registrar</button>
                            </form>
                        </div>
                        <div className="form-container sign-in-container">
                            <form className='form-interactive' onSubmit={verificarCuenta}>
                                <h1 className='m-0 p-0 text-center'>Iniciar Cesion</h1>
                                <br/>
                                <div className="social-container">
                                    <a className='a-form-new social' href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className='a-form-new social' href="#"><i className="fab fa-google-plus-g"></i></a>
                                    <a className='a-form-new social' href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <br/>
                                <span>or use your account</span>
                                <input className='input-form-interactive' type="text" placeholder="Nombre" required onChange={handleNombre}/>
                                <input className='input-form-interactive' type="text" placeholder="Pasaporte" required onChange={handlePasaporte}/>
                                <br/>
                                <a className='a-form-new' href="#" >Forgot your password?</a>
                                <br/>
                                <button type='submit' className='btn-form-interactive'>Entrar</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay">
                                <div className="overlay-panel overlay-left">
                                    <h1 className='m-0 p-0 text-center'>Welcome Back!</h1>
                                    <p className='p-form-interactive'>To keep connected with us please login with your personal info</p>
                                    <button className="ghost btn-form-interactive" id="signIn">Sign In</button>
                                </div>
                                <div className="overlay-panel overlay-right">
                                    <h1 className='m-0 p-0 text-center'>Hello, Friend!</h1>
                                    <p className='p-form-interactive'>Enter your personal details and start journey with us</p>
                                    <button className="ghost btn-form-interactive" id="signUp">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

function Comprar({pasaporte,codviaje,vuelo}){
    function collapseContent(){
        // let collapses = document.getElementsByClassName("collapse-function");
        // for (let i=0;i<collapses.length;i++){
        //     $(collapses[i]).hide();
        // }
    }
    collapseContent()
    return(
        <>
            <div className="bg-light m-0 p-0">
                <div className="container min-vh-100">
                    <div className="p-3 container justify-content-center">
                        <div className="info-ticket-compra">
                            <div className="border-bottom">
                                <div className="p-3 d-flex">
                                    <div className="ticket-compra-icon">
                                        <TiTicket className="w-100 h-100 text-color-primario-page"/>
                                    </div>
                                    <div className="w-100">
                                        <h3 className="text-center p-0 m-0">Vuelo {vuelo.vuelos.ciudadorigen}-{vuelo.vuelos.ciudaddestino}</h3>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="border-bottom">
                                    <div>
                                        <div>
                                        <   div className="form-check">
                                                <ul className="m-0">
                                                    <li>    
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio1"/>
                                                        <label className="form-check-label" htmlFor="flexRadio1" >
                                                            Tarjeta Crédito
                                                        </label>
                                                        <div className="collapse collapse-function" id="collapseExample">
                                                            <div className="card card-body">
                                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>    
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio2"/>
                                                        <label className="form-check-label" htmlFor="flexRadio2">
                                                            Tarjeta Débito
                                                        </label>
                                                        <div className="collapse collapse-function" id="collapseExample">
                                                            <div className="card card-body">
                                                                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>    
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio3"/>
                                                        <label className="form-check-label" htmlFor="flexRadio3">
                                                            Webpay
                                                        </label>
                                                    </li>
                                                </ul>
                                                
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="w-100">
                                <div className="container p-2 justify-content-between">
                                    <button className="btn-volver-atras">Volver atrás</button>
                                    <button className="btn-confirmar-compra">Confirmar compra</button>
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