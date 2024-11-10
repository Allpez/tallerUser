import { Router } from "express";
import allUser from "../controllers/users/read.js";


const routerUsers = Router()

routerUsers.get('/all', allUser)


export default routerUsers