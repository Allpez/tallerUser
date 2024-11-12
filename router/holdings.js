import { Router } from "express";
import { allHolding, holdingByID, holdingByUser } from "../controllers/holdings/read.js";
import { create,insertMany } from "../controllers/holdings/create.js"
import update from "../controllers/holdings/update.js"
import deleteOne from "../controllers/holdings/delete.js"

const routerHoldings = Router()


routerHoldings.get('/all', allHolding)
routerHoldings.get('/id/:id', holdingByID)
routerHoldings.get('/user/:userId', holdingByUser)
routerHoldings.post('/create',create)          //Enrutador para "Crear nuevo usuario"
routerHoldings.post('/insertmany',insertMany)  //Enrutador para "Crear nuevos usuarios"
routerHoldings.put('/update', update)          //Creamos un enrutador para actualizar un elementos en la data
routerHoldings.delete('/deleteOne', deleteOne) //Creamos un enrutador para eliminar un elemento de la data


export default routerHoldings