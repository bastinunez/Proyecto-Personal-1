import React,{useContext} from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavButton,
  NavButtonLink,
  NavMiCuenta
} from "./NavbarElements";
import { NavLink as NavLink2, NavLink3 } from "./NavbarElements";
//import { NavLink } from "react-router-dom";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import AutenticarContext from "../../context/AutenticarContext";

const Navbar = () => {
  const {auth} = useContext(AutenticarContext);
  return (
    <>
      <Nav id="navbar">
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#0dcaf0",
                  padding: "0 1rem",
                  textDecoration: "none",
                  alignItems: "center",
                  display: "flex",
                }
              : {
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "0 1rem",
                  height: "100%",
                  cursor: "pointer",
                }
          }
        >
          <MdOutlineAirplaneTicket id="logo-aerolinea" className="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/aerolinea">Aerolineas</NavLink>
          <NavLink
            to="/services"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0dcaf0",
                    padding: "0 1rem",
                    textDecoration: "none",
                  }
                : {
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    padding: "0 1rem",
                    height: "100%",
                    cursor: "pointer",
                  }
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact-us"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0dcaf0",
                    padding: "0 1rem",
                    textDecoration: "none",
                  }
                : {
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    padding: "0 1rem",
                    height: "100%",
                    cursor: "pointer",
                  }
            }
          >
            Contact us
          </NavLink>
          {auth? 
          <>
            <NavMiCuenta></NavMiCuenta>
          </>
          :
          <>
            <NavLink 
            id="button-sign-up"
            to="/sign-up"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0dcaf0",
                    padding: "0 1rem",
                    textDecoration: "none",
                  }
                : {
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    padding: "0 1rem",
                    height: "100%",
                    cursor: "pointer",
                  }
              }
            >
              Sign up
            </NavLink>
            <NavButtonLink to="/sign-in" id="button-sign-in">Registrarse</NavButtonLink>
          </>}
          {/* <NavLink 
            id="button-sign-up"
            to="/sign-up"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#0dcaf0",
                    padding: "0 1rem",
                    textDecoration: "none",
                  }
                : {
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    padding: "0 1rem",
                    height: "100%",
                    cursor: "pointer",
                  }
            }
            
          >
            Sign up
          </NavLink>
          <NavButtonLink to="/sign-in" id="button-sign-in">Registrarse</NavButtonLink>
          <NavMiCuenta></NavMiCuenta> */}
        </NavMenu>
      </Nav>
    </>
  );
};



export default Navbar;
