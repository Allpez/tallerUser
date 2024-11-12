import { Router } from "express";
import { allUser, usersByID, usersByName } from "../controllers/users/read.js";
import { create, insertMany } from "../controllers/users/create.js"
import update from "../controllers/users/update.js"
import deleteOne from "../controllers/users/delete.js"
import validator from "../middlewares/validator.js";
import schemaUsersCreate from "../schemas/users/create.js";

const routerUsers = Router()

routerUsers.get('/all', allUser)
routerUsers.get('/id/:id', usersByID)
routerUsers.get('/name/:name', usersByName)
routerUsers.post('/create', validator(schemaUsersCreate), create)
routerUsers.post('/insertmany', insertMany)
routerUsers.put('/update', validator(schemaUsersCreate), update)
routerUsers.delete('/deleteOne', deleteOne)

export default routerUsers 