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

    
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState();
    const [numberAccount, setNumberAccount] = useState();
    const [cvv, setCvv] = useState();
    const [date, setDate] = useState();
    const [cuoutas, setCuotas] = useState();

    const handleBank = (e) => {
        setBank(e.target.value);
    }
    const handleAccount = (e) => {
        setAccount(e.target.value);
    }
    const handleNumberAccount = (e) => {
        setNumberAccount(e.target.value);
    }
    const handleCvv = (e) => {
        setCvv(e.target.value);
    }
    const handleDate = (e) => {
        setDate(e.target.value);
    }
    const handleCuotas = (e) => {
        setCuotas(e.target.value);
    }

    const confirmarCompra = (e) => {
        e.preventDefault();
        alert("compra confirmada")
    }


    $(function (){
        $("input[name='inlineRadioOptions']").on("click",function () {
            var checkedValue = $("input[name='inlineRadioOptions']:checked").val();
            $("#collapseOne").removeClass('show');
            $("#collapseTwo").removeClass('show');
            $("#collapseTres").removeClass('show');
            $("*[data-required='yes']").prop("disabled",true);
            if (checkedValue == "option1") {
                $("#collapseOne").addClass('show');
                $("*[data-target='debito']").prop("disabled",false)
            } else if (checkedValue == "option2") {
                $("#collapseTwo").addClass('show');
                $("*[data-target='credito']").prop("disabled",false)
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
                                <div className="">
                                    <form onSubmit={confirmarCompra}>
                                        <div className='border-bottom w-100'>
                                            <h5 className='p-1 ps-3 m-0'>Formas de pago</h5>
                                            <div className="form-check">
                                                <ul className="m-0">
                                                    <li id='tarjeta-debito'>
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                        <label className="form-check-label" htmlFor="inlineRadio1">
                                                            Tarjeta Débito
                                                        </label>
                                                        <div id="collapseOne" className="panel-collapse collapse container-collapse">
                                                            <div className='container-form-debito'>
                                                                <div className='cont-input-type-bank'>
                                                                    <select id="debito-banks" data-required="yes" data-target="debito" defaultValue={'DEFAULT'}  className=" mx-auto" aria-label="Default select example" required>
                                                                        <option value="DEFAULT" disabled>BANCO</option>
                                                                        <option value={"ESTADO"}>ESTADO</option>
                                                                        <option value={"SCOTIABANK"}>SCOTIABANK</option>
                                                                        <option value={"SANTANDER"}>SANTANDER</option>
                                                                        <option value={"BCI"}>BCI</option>
                                                                        <option value={"BANCO CHILE"}>BANCO DE CHILE</option>
                                                                    </select>
                                                                </div>
                                                                <div className='cont-input-type-account'>
                                                                    <select id="debito-type-account" data-required="yes" data-target="debito" defaultValue={'DEFAULT'}  className="mx-auto" aria-label="Default select example" required>
                                                                        <option value="DEFAULT" disabled>TIPO CUENTA</option>
                                                                        <option value={"VISTA"}>VISTA</option>
                                                                        <option value={"CORRIENTE"}>CORRIENTE</option>
                                                                        <option value={"AHORRO"}>AHORRO</option>
                                                                    </select>
                                                                </div>
                                                                <div className='cont-input-number-account'>
                                                                    <input id="debito-numero-cuenta" className='input-compra-tarjetas' data-required="yes" data-target="debito" type="text" placeholder='NUMERO DE CUENTA' required minLength="16" maxLength="16" pattern="[0-9]*" disabled></input>
                                                                </div>
                                                                <div className='cont-inputs-cvv-date-valdiation'>
                                                                    <div className='cont-input-number-cvv'>
                                                                        <input className='input-compra-tarjetas' data-target="debito" id="debito-cvv" data-required="yes" type="text" placeholder='CVV' required minLength="3" maxLength="3" pattern="[0-9]*" disabled></input>
                                                                    </div>
                                                                    <div className='cont-input-validation-date'>
                                                                        <select id="debito-validation-date" data-required="yes" data-target="debito" defaultValue={'DEFAULT'}  className="mx-auto" aria-label="Default select example" required>
                                                                            <option value="DEFAULT" disabled>MM/AA</option>
                                                                            <option value={"3/23"}>3/23</option>
                                                                            <option value={"4/23"}>4/23</option>
                                                                            <option value={"5/23"}>5/23</option>
                                                                            <option value={"6/23"}>6/23</option>
                                                                            <option value={"7/23"}>7/23</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li id='tarjeta-credito'>
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                                        <label className="form-check-label" htmlFor="inlineRadio2">
                                                            Tarjeta Credito
                                                        </label>
                                                        <div id="collapseTwo" className="panel-collapse collapse container-collapse">
                                                        <div className='container-form-credito'>
                                                            <div className='cont-inputs-bank-type'>
                                                                <div className='cont-input-type-bank-credit'>
                                                                    <select id="credito-banks" data-required="yes" data-target="credito" defaultValue={'DEFAULT'}  className=" mx-auto" aria-label="Default select example" required>
                                                                        <option value="DEFAULT" disabled>BANCO</option>
                                                                        <option value={"ESTADO"}>ESTADO</option>
                                                                        <option value={"SCOTIABANK"}>SCOTIABANK</option>
                                                                        <option value={"SANTANDER"}>SANTANDER</option>
                                                                        <option value={"BCI"}>BCI</option>
                                                                        <option value={"BANCO CHILE"}>BANCO DE CHILE</option>
                                                                    </select>
                                                                </div>
                                                                <div className='cont-input-type-account-credit'>
                                                                    <select id="credito-type-account" data-required="yes" data-target="credito" defaultValue={'DEFAULT'}  className="mx-auto" aria-label="Default select example" required>
                                                                        <option value="DEFAULT" disabled>TIPO CUENTA</option>
                                                                        <option value={"VISTA"}>VISTA</option>
                                                                        <option value={"CORRIENTE"}>CORRIENTE</option>
                                                                        <option value={"AHORRO"}>AHORRO</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className='cont-input-number-account-credit'>
                                                                <input className='input-compra-tarjetas' id='credito-numero-cuenta' data-required="yes" data-target="credito" type="text" placeholder='NUMERO DE CUENTA' required minLength="16" maxLength="16" pattern="[0-9]+" disabled></input>
                                                            </div>
                                                            <div className='cont-inputs-cvv-date-validation-credit'>
                                                                <div className='cont-input-number-cvv'>
                                                                    <input className='input-compra-tarjetas' type="text" id='credito-cvv' data-required="yes" data-target="credito" placeholder='CVV' required minLength="3" maxLength="3" pattern="[0-9]+" disabled></input>
                                                                </div>
                                                                <div className='cont-input-validation-date'>
                                                                    <select id="credito-validation-date" data-required="yes" defaultValue={'DEFAULT'}  className="mx-auto" data-target="credito" aria-label="Default select example" required>
                                                                        <option value="DEFAULT" disabled>MM/AA</option>
                                                                        <option value={"3/23"}>3/23</option>
                                                                        <option value={"4/23"}>4/23</option>
                                                                        <option value={"5/23"}>5/23</option>
                                                                        <option value={"6/23"}>6/23</option>
                                                                        <option value={"7/23"}>7/23</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className='cont-cuotas'>
                                                                <select id="credito-numero-cuotas" defaultValue={'DEFAULT'} data-required="yes" className="mx-auto" aria-label="Default select example" data-target="credito" required>
                                                                        <option value="DEFAULT" disabled>CUOTAS</option>
                                                                        <option value={"0 CUOTAS"}>0 CUOTAS</option>
                                                                        <option value={"1 CUOTAS"}>1 CUOTAS</option>
                                                                        <option value={"2 CUOTAS"}>2 CUOTAS</option>
                                                                        <option value={"3 CUOTAS"}>3 CUOTAS</option>
                                                                </select>
                                                            </div>  
                                                        </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                                                        <label className="form-check-label" htmlFor="inlineRadio3">
                                                            Webpay
                                                        </label>
                                                        <div id="collapseTres" className="panel-collapse collapse container-collapse">
                                                            <a className='text-decoration-none'>Ir a pagar con Onepay</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="container p-2 justify-content-between">
                                            <button className="btn-volver-atras">Volver atrás</button>
                                            <button type='submit' className="btn-confirmar-compra">Confirmar compra</button>
                                        </div>
                                    </form>
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
}
