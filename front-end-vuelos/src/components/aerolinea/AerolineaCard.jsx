import "./Aerolinea.css";
import { FaAngleRight } from "react-icons/fa";

function AerolineaCard({ aerolinea, deleteAerolinea }) {
  return (
      <div className="card m-3">
        <div className="card-img"> <img
              src="https://astelus.com/wp-content/viajes/las-principales-aerolineas-del-mundo.jpg"
              className="card-img-top"
              alt="..."
            ></img> </div>
        <div className="card-info">
          <p className="text-title">{aerolinea.nombre}</p>
        </div>
        <div className="card-footer bg-transparent">
          <span className="text-title-bot">Buscar vuelos</span>
          <div className="card-button">
            <FaAngleRight/>
          </div>
        </div>
      </div>
    
  );
}

export default AerolineaCard;

