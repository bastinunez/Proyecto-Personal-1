import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

const URI_vuelos = "http://localhost:8000/vuelo/";

function Contenido() {
  return (
    <div
      id="GROUPED_RECOMMENDATIONS"
      className="home-ui-module home-ui-trackable-module "
    >
      <div className="home-ui-grouped-recommendations-module-background-higher-layer home-ui-track-view">
        <div className="eva-3-container">
          <div id="grouped-recommendations">
            <div className="grouped-recommendations-grid-container">
              <div className="gr-title1 grouped_recommendations__title eva-3-h3 -eva-3-mb-lg -eva-3-ml-md">
                Top destinos más buscados hoy en Chile
              </div>
              <div className="gr-cards">
                <div id="carouselExampleControls" className="container-carousel carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="cards-wrapper">
                        <div className="card mx-auto">
                            <img src="https://storage.googleapis.com/chile-travel-newsite-static-content/2021/08/Vitrina_Centro_santiago-1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Santiago de Chile</h5>
                              <a href="#" className="btn btn-primary">Ir a algún lugar</a>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="cards-wrapper">
                        <div className="card mx-auto">
                            <img src="https://i0.wp.com/passporterapp.com/es/blog/wp-content/uploads/2021/10/iquique-chile.jpg?fit=1623%2C1080&ssl=1" className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <h5 className="card-title">Iquique</h5>
                              <a href="#" className="btn btn-primary">Ir a algún lugar</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                      <div className="cards-wrapper">
                        <div className="card mx-auto">
                          <img src="https://turismomagallanes.cl/wp-content/uploads/2021/09/parenas.jpg" className="card-img-top" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title">Punta Arenas</h5>
                            <a href="#" className="btn btn-primary">Ir a algún lugar</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon bg-dark rounded-5" aria-hidden="true" ></span>
                    <span className="visually-hidden">Anterior</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
                    <span className="carousel-control-next-icon bg-dark rounded-5" aria-hidden="true" ></span>
                    <span className="visually-hidden">Siguiente</span>
                  </button>
                </div>
              </div>
              <div className="gr-title2 grouped_recommendations__title title-margin-fixer eva-3-h3 -eva-3-ml-md">
                Ofertas que no pueden esperar
              </div>
              <div className="gr-hub-offers">
                <div className="offer-container-wrapper">
                  <div className="offer-hub-container -eva-3-m-sm -eva-3-halign">
                    <img
                      className="image-complete"
                      src="https://media.staticontent.com/media/pictures/50ecf17c-4933-4c97-a65b-f561915c3ceb"
                    />
                    <div className="border-top image-footer -eva-3-valign">
                      <p className="content-image">
                        Si aún no definiste tu destino, te puede interesar ver
                        nuestra sección de ofertas.
                      </p>
                      <a
                        id="view-offers-hub"
                        className="eva-3-btn -md -primary finance-left-button home-ui-finance-to-landing-button home-ui-track-click"
                        target="_blank"
                        rel="nofollow"
                        data-click-track-label="view-offers-hub"
                        href="/ofertas-de-viajes"
                      >
                        <em className="btn-text">Ver ofertas</em>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contenido;
