import "./ticket.css"
import { MdAirplanemodeActive } from "react-icons/md";

function TicketCard({costo,fecha,vuelo,aerolinea}){
    const fecha_new = fecha.substring(0,10);
    return(
        <div className="container-ticket-card" id="ticket-card">
            <div className="row" id="ticket-card">
                <div className="col-10 col-logo-content"> {/*LOGO,CONTENIDO*/}
                    <div className="row-variado">
                        <div className="logo-aerolinea" id="ticket">
                            <div className="img-aerolinea" id="ticket">
                                <MdAirplanemodeActive/>
                            </div>
                            <div className="name-aerolinea" id="ticket">
                                <p id="name-aerolinea">{aerolinea}</p>
                            </div>
                        </div>
                        <div className="ida-ciudades">
                            <p className="text-ida">IDA</p>
                            <p className="text-ciudades">{vuelo.ciudadorigen}-{vuelo.ciudaddestino}</p>
                        </div>
                        <div className="fecha-vuelo">
                            <p className="text-fecha m-0 p-0">{fecha_new}</p>
                        </div>
                        <div className="hora-vuelo">
                            <p className="text-hora-salida m-0 p-0">{vuelo.horasalida}</p>
                        </div>
                    </div>
                </div>
                <div className="col-2 col-logo-content"> {/*COSTO*/}
                    <div className="block-costo" id="costo">
                        <div className="d-desde">
                            <p className="desde" id="">Desde:</p>
                        </div>
                        <div className="costo-pasaje">
                            <p className="costo">${costo}</p>
                        </div>
                        <div className="ver-info">
                            <a className="a-ver-info">Más información</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TicketCard;
