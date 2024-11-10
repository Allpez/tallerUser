import { Router } from "express";
import { allUser, usersByID, usersByName } from "../controllers/users/read.js";
import { create,insertMany } from "../controllers/users/create.js"
import update from "../controllers/users/update.js"
import deleteOne from "../controllers/users/delete.js"

const routerUsers = Router()

routerUsers.get('/all', allUser)
routerUsers.get('/id/:id', usersByID)
routerUsers.get('/name/:name', usersByName)
routerUsers.post('/create',create)          //Enrutador para "Crear nuevo usuario"
routerUsers.post('/insertmany',insertMany)  //Enrutador para "Crear nuevos usuarios"
routerUsers.put('/update', update)          //Creamos un enrutador para actualizar un elementos en la data
routerUsers.delete('/deleteOne', deleteOne) //Creamos un enrutador para eliminar un elemento de la data



export default routerUsers