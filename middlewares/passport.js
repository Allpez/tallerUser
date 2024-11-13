//Middleware que se va a encargar de validar el token

import User from "../models/User";
import passport from "passport";
import { Strategy, extractJwt } from "passport-jwt";