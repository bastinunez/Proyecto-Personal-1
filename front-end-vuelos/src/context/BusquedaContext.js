import {createContext,useState} from 'react';

const BusquedaContext =  createContext();

const initialBusqueda = {
    originCity: "",
    destinationCity : "",
    dateIn : "",
    dateOut : ""
};
const initialVuelos = null
const initialVueloCompra = {}

const BusquedaProvider = ({children}) => {
    const [busqueda,setBusqueda] = useState(initialBusqueda);
    const [vuelosArray, setVuelos] = useState(initialVuelos);
    const [vueloCompra, setVueloCompra] = useState(initialVueloCompra);

    const editBusqueda = (data) => {
        setBusqueda(data);
    }
    const editVuelos = (data) => {
        setVuelos(data);
    }
    const editVueloCompra = (data) => {
        setVueloCompra(data);
    }

    const data={busqueda, editBusqueda, vuelosArray, editVuelos, editVueloCompra, vueloCompra};
    return <BusquedaContext.Provider value={data}>{children}</BusquedaContext.Provider>
}

export {BusquedaProvider};
export default BusquedaContext;