import React from "react";
import { useLocation} from "react-router-dom";
import {BuyTicket} from "../components/compra/indexCompra";

const ComprarTicket = () => {
    let location = useLocation();
    const codviaje = location.state.codviaje;
    
    return (
        <div>
            <BuyTicket boolCompra={true} codviaje={codviaje}/>
        </div>
    );
};

export default ComprarTicket;