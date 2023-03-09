import React from "react";
import ShowAerolineas from "../components/aerolinea/ShowAerolineas";
import {Footer} from "../components/footer/index.js"

const Aerolinea = () => {
  return (
    <div className="container-fluid" style={{backgroundColor: "#eeeeef",padding:"0"}}>
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
                Aerolineas
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div
        className="container"
        style={{
          justifyContent: "center",
          height: "90vh",
          width: "auto",
          color: "black",
        }}
      >
        <ShowAerolineas />
      </div>
      <Footer/>
    </div>
  );
};

export default Aerolinea;
