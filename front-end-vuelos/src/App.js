import './App.css'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {AutenticarProvider} from './context/AutenticarContext.js'
import {BusquedaProvider} from './context/BusquedaContext.js'
import Aerolinea from './pages/aerolinea';
import Home from "./pages/home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Cuenta from "./pages/miCuenta";
import Vuelos from "./pages/vuelos";
import ComprarTicket from "./pages/buyTicket";


function App() {
  return (
    <Router>
        <AutenticarProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aerolinea" element={<Aerolinea/>} />
            <Route path="/sign-in" element={<SignIn/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/mi-cuenta" element={<Cuenta/>} />
            <Route path="/vuelos" element={<Vuelos/>} />
            <Route path="/comprar-ticket" element={<ComprarTicket/>} />
          </Routes>
        </AutenticarProvider>
    </Router>
  );
}

export default App;
