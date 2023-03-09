import {createContext,useState} from 'react';

const AutenticarContext =  createContext();

const initialAutenticar = null;
const initialUser = {
    name: "",
    pais: "",
    pasaporte: null
}

const AutenticarProvider =  ({children}) => {
    const [auth,setAuth] =  useState(initialAutenticar);
    const [user, setUser] = useState(initialUser);

    const handleAuth = (e) => {
        if (auth){
            setAuth(null);
        }else{
            setAuth(true);
        }
    }
    const editUser = (data) => {
        setUser(data);
    }

    const data= {auth,handleAuth, user, editUser};

    return <AutenticarContext.Provider value={data}>{children}</AutenticarContext.Provider>;
}
export {AutenticarProvider}
export default AutenticarContext;