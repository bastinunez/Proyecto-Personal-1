import "./ticket.css";
import TicketCard from './TicketCard';

export function Ticket({tickets}){

    return(
        <div className="content-tickets">
            <div className="box-tickets">
                {tickets.map((ticket)=>(
                    <TicketCard key={ticket.codigo} costo={ticket.costo} fecha={ticket.fecha} vuelo={ticket.vuelos} aerolinea={ticket.vuelos.aerolineas.nombre}/>
                ) )}
            </div>
        </div>
    )
}
