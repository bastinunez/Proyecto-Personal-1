import "./footer.css"

export function Footer() {
    
    
    return(
        <footer className="footer-home">
            <div className="container container-footer w-100 m-0 p-0" id="home">
                <div className="container-grid pt-3">
                    <div className="container-somos">
                        <ul className="footer-list">
                            <li className="list-footer"><a className="text-decoration-none title-content-footer">¿Quiénes somos?</a></li>
                            <li><a className="text-decoration-none text-content-footer">Nuestro teléfono</a></li>
                            <li><a className="text-decoration-none text-content-footer">Trabaja con nosotros</a></li>
                            <li><a className="text-decoration-none text-content-footer">Derechos y obligaciones del pasajero</a></li>
                        </ul>
                    </div>
                    <div className="container-confianza">
                        <ul className="footer-list">
                            <li className="list-footer"><a className="text-decoration-none title-content-footer">Confianza en tus compras</a></li>
                            <li><a className="text-decoration-none text-content-footer">Condiciones de compra</a></li>
                            <li><a className="text-decoration-none text-content-footer">Política de privacidad</a></li>
                            <li><a className="text-decoration-none text-content-footer">Derechos y obligaciones del pasajero</a></li>
                            <li><a className="text-decoration-none text-content-footer">Black Friday</a></li>
                        </ul>
                    </div>
                    <div className="container-aerolineas">
                        <ul className="footer-list">
                            <li className="list-footer"><a className="text-decoration-none title-content-footer">Aerolineas</a></li>
                            <li><a className="text-decoration-none text-content-footer">LAN</a></li>
                            <li><a className="text-decoration-none text-content-footer">American Airlines</a></li>
                            <li><a className="text-decoration-none text-content-footer">Air France</a></li>
                            <li><a className="text-decoration-none text-content-footer">SKY</a></li>
                            <li><a className="text-decoration-none text-content-footer">Delta</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}