import styled from "styled-components";
import "./Nav.css";
import {useContext} from 'react'
import { NavLink as Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { getPasajero,logeado,removeCookies } from "../home/index.js";
import AutenticarContext from "../../context/AutenticarContext.js"; 
import Cookies from "universal-cookie";

//ESTILOS A NAV CON STYLED-COMPONENTS
export const Nav = styled.nav`
  background: #006d77;
  height: 64px;
  display: flex;
  color: #efefef;
  justify-content: space-between;
  text-decoration: none;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  font-family: Rubik,Arial,sans-serif;
`;

//ESTILOS A NAVLINK
export const NavLink = styled(Link)`
  color: #efefef;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #fff;
    font-weight: 600;
    padding: 0 1rem;
    text-decoration: none;
  }
  &:hover {
    color: #fff;
  }
`;

export const NavLink2 = styled(Link)`
  font-size: 18px;
  color: #e1e1e1;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
  text-decoration: none;

  &.active {
    color: #fff;
  }
  &:focus,
  &:hover {
    color: #fff;
  }
  &:focus:after,
  &:hover:after {
    width: 100%;
    left: 0%;
  }
  &::after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #fff;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }
`;
//&.active =>cuando se presiona

export const NavLink3 = styled(Link)`
  padding: 1em 2em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
  &:active {
    transform: translateY(-1px);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
/* @media: son útiles cuando deseas modificar tu página web o aplicación en función del tipo de dispositivo
    media screen and (max-width: 768px)  => For mobile phones
*/

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavButtonLink = styled(Link)`
  border-radius: 4px;
  background: #ff8c40;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export function NavMiCuenta() {
  const {handleAuth, editUser, user, auth} = useContext(AutenticarContext);
  const nombre = user.name;
  const cookies = new Cookies();
  const navigate = useNavigate();

  function miCuenta() {
    cookies.set(
      "info",
      {
        option_selected: "btn-mis-datos"
      },
      "/mi-cuenta"
    );
    navigate("/mi-cuenta");
  }

  function misTickets() {
    cookies.set(
      "info",
      {
        option_selected: "btn-mis-tickets"
      },
      "/mi-cuenta"
    );
    navigate("/mi-cuenta");
  }
  function cerrarSesion() {
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
      )
      navigate("/");
    }
  }
  return (
    <div
      id="button-cerrar-sesion"
      className="cerrar-sesion"
      style={{ display: "flex" }}
    >
      <div className="dropdown">
        <div className="btn-mi-cuenta dropdown-toggle" type="button">
          Hola, {nombre}
        </div>
        <ul className="dropdown-menu" id="dropdown">
          <li id="dropdown-cuenta">
            <a className="dropdown-item" data-opcion="mi-cuenta" onClick={miCuenta}>
              Mi cuenta
            </a>
          </li>
          <li id="dropdown-cuenta">
            <a
              className="dropdown-item"
              data-opcion="mi-ticket"
              onClick={misTickets}
            >
              Mis tickets
            </a>
          </li>
          <li id="dropdown-cuenta">
            <a
              className="dropdown-item"
              data-opcion="cerrar-sesion"
              onClick={cerrarSesion}
            >
              Cerrar Sesion
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

//&:hover => cuando se pasa por encima
