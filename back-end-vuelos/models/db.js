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
module.exports=db
export default db
