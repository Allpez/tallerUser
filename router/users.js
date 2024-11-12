import { Router } from "express";
import { allUser, usersByID, usersByName } from "../controllers/users/read.js";
import { register, insertMany } from "../controllers/users/register.js"
import update from "../controllers/users/update.js"
import deleteOne from "../controllers/users/delete.js"
import validator from "../middlewares/validator.js";
import schemaUsersRegister from "../schemas/users/create.js";
import accountExists from "../middlewares/accountExists.js";

const routerUsers = Router()

routerUsers.get('/all', allUser)
routerUsers.get('/id/:id', usersByID)
routerUsers.get('/name/:name', usersByName)
routerUsers.post('/register', validator(schemaUsersRegister), accountExists, register)
routerUsers.post('/insertmany', insertMany)
routerUsers.put('/update', validator(schemaUsersRegister), update)
routerUsers.delete('/deleteOne', deleteOne)

export default routerUsers 