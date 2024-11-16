import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import signOut from "../controllers/auth/signOut.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";
import jwt from "jsonwebtoken";


const routerAuth = Router()

routerAuth.post('/signIn', accountNoExist, isValidPassword, generateToken, signIn) //Post: Espera una respuesta
routerAuth.post('/signOut', passport.authenticate('jwt', { session: false }), signOut)

//Ruta para iniciar sesion con Google.
routerAuth.get(
    '/signIn/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })  //peticion de get porque redireccionamos a google
)
routerAuth.get(
    '/signIn/google/callback',
    passportGoogle.authenticate('google',{ session: false, failureRedirect: '/login'}),
    generateToken,
    signIn
)

export default routerAuth