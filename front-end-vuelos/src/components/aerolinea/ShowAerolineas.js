import AerolineaCard from "./AerolineaCard";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Aerolinea.css";

const URI = "http://localhost:8000/aerolinea/";

function AerolineaList() {
  const [aerolineas, setAerolineas] = useState([]);
  useEffect(() => {
    getAerolineas();
  }, []);

  //procedimiento para mostrar todos los aerolineas
  const getAerolineas = async () => {
    const res = await axios.get(URI);
    setAerolineas(res.data);
  };

  //procedimiento para eliminar una aerolinea
  const deleteAerolinea = async (id) => {
    await axios.delete(`${URI}${id}`);
    getAerolineas();
  };
      
  function removeDuplicates(aerolineas) {
    const array =  aerolineas.map((aerolinea) => (aerolinea.pais)) 
    return array.filter((item, index) => array.indexOf(item) === index); 
  }

  function getFilters(){
    
  }
    
  if (aerolineas.length === 0) {
    //en caso de arreglo vacio
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay tareas aun
      </h1>
    );
  }
  return (
    <div>
      <div className="row p-2 mt-1" style={{"backgroundColor":"#eeeeef"}}>
        <div className="col-3 bg-white">
          <form onSubmit={getFilters}>
            <div
              className="accordion accordion-flush mt-4"
              id="accordionPanelsStayOpenExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    País
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body pt-0 mt-0">
                    <ul className="list-unstyled p-0 m-0">
                      {removeDuplicates(aerolineas).map((aerolinea) => (
                        <li className="listado" key={aerolinea}>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            {aerolinea}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Acordeón artículo #2
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <strong>
                      Este es el cuerpo del acordeón del segundo elemento.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="button-filter bg-primary mt-3" onClick={getFilters} >Filtrar</button>
          </form>
        </div>

        <div className="col-9">
          <div className="pb-5">
            <div className="container-fluid bg-white w-100 ms-1" style={{"height":"50px"}}></div>
            <div className="container-fluid row row-cols-1 row-cols-md-5 g-3 bg-white mt-3 mb-3 ms-1 me-0 align-items-center">
              {aerolineas.map((aerolinea) => (
                <AerolineaCard
                  key={aerolinea.codigo}
                  aerolinea={aerolinea}
                  deleteAerolinea={deleteAerolinea}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AerolineaList;
