import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";

const routerAuth = Router()

routerAuth.post('/signIn', accountNoExist, isValidPassword, generateToken, signIn)


export default routerAuth