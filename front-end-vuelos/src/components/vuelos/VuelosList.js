import React,{useContext} from 'react';
import VueloCard from "./VueloCard.js";
import BusquedaContext from '../../context/BusquedaContext';


export const VuelosMiniList = ({vuelosArray}) => {
    if(vuelosArray){
        if (vuelosArray.length === 0){
            return(
            <div>
                <h2>No se encontraron vuelos para la búsqueda.</h2>
            </div>)
        }
        else{
            return(
                <>
                    <div className="content-vuelos">
                        <div className="box-vuelos">
                            {vuelosArray.map((vuelo) =>(
                                <VueloCard key={vuelo.codigo} info={vuelo}/>
                            ))}
                        </div>
                        
                    </div>
                </>
            )
        }
    }
    
   
  
}
