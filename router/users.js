import { Router } from "express";
import { allUser, usersByID, usersByName } from "../controllers/users/read.js";
import register from "../controllers/users/register.js"
import update from "../controllers/users/update.js"
import deleteOne from "../controllers/users/delete.js"
import validator from "../middlewares/validator.js";
import schemaUsersRegister from "../schemas/users/create.js";
import schemaUsersUpdate from "../schemas/users/update.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";

const routerUsers = Router()

routerUsers.get('/all', allUser)
routerUsers.get('/id/:id', usersByID)
routerUsers.get('/name/:name', usersByName)
routerUsers.post('/register', validator(schemaUsersRegister), accountExists, createHash, register)
routerUsers.put('/update', validator(schemaUsersUpdate), createHash, update)
routerUsers.delete('/deleteOne', deleteOne)

export default routerUsers  