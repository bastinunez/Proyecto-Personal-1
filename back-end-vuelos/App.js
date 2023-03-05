import express from 'express'
import cors from 'cors'
//importamos nuestro enrutador
import {router1,router2, router3, router4, router5, router6} from './routes/routes.js'

const app = express()


app.use( cors())
app.use(express.json())
app.use("/pasajero",router1)
app.use("/aerolinea",router2)
app.use("/piloto",router3)
app.use("/ticket",router4)
app.use("/viaje",router5)
app.use("/vuelo",router6)

app.listen(8000, () => {
    console.log("Server up running in http://localhost:8000/")
})