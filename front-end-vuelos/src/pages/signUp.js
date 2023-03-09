import React from "react";
import {InicioCesion} from "../components/cuenta/inicio"

const SignUp = ({boolCompra, codviaje}) => {
  return (
    <div className="container-fluid" style={{padding:"0",margin:"0"}}>
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
            <InicioCesion boolCompra={boolCompra} codviaje={codviaje}/>
        </div>
    </div>
  );
};
export default SignUp;