import React from "react";
import {Registro} from "../components/cuenta/registro"

const SignIn = () => {
  return (
    <div className="container-fluid" style={{padding:"0",margin:"0"}}>
        <div className="ms-0 pt-1 ps-5 border-bottom bg-light">
            <nav aria-label="breadcrumb" className="container-fluid pt-3">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    <a className="breadcrumb-text" href="/">
                        Home
                    </a>
                    </li>
                    <li className="breadcrumb-item">
                    <a className="breadcrumb-text" href="/aerolinea">
                        Registrarse
                    </a>
                    </li>
                </ol>
            </nav>
        </div>
        <div
            className="container-fluid"
            style={{
            padding:"0",
            margin:"0",
            height: "90vh",
            width: "auto",
            color: "black",
            }}
        >
            <Registro/>
        </div>
    </div>
  );
};
export default SignIn;