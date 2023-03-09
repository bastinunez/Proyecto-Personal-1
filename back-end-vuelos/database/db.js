import {Sequelize} from 'Sequelize';

/*
    const db = new Sequelize(nombreBD,user,password,{
        host:"localhost",
        dialect:"mysql"
    })
*/


const db = new Sequelize("aerolineas_bd","root","root123",{
    host:"localhost",
    dialect:"mysql"
})
try{
    await db.authenticate()
    console.log("conexion exitosa")
}
catch(error){
    console.log("el error de la conexion es ${error} ")
}

export default db;