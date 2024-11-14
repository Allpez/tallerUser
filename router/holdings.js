import { Router } from "express";
import { allHolding, holdingByID, holdingByUser } from "../controllers/holdings/read.js";
import { create, insertMany } from "../controllers/holdings/create.js";
import update from "../controllers/holdings/update.js";
import deleteOne from "../controllers/holdings/delete.js";
import validator from "../middlewares/validator.js";
import schemaHoldingsCreate from "../schemas/holdings/create.js";
import passport from "../middlewares/passport.js";

const routerHoldings = Router()

routerHoldings.get('/all', passport.authenticate('jwt', { session: false }), allHolding)
routerHoldings.get('/id/:id', passport.authenticate('jwt', { session: false }), holdingByID)
routerHoldings.get('/user/:userId', passport.authenticate('jwt', { session: false }), holdingByUser)
routerHoldings.post('/create', passport.authenticate('jwt', { session: false }), validator(schemaHoldingsCreate), create)
routerHoldings.post('/insertmany', passport.authenticate('jwt', { session: false }), validator(schemaHoldingsCreate), insertMany)
routerHoldings.put('/update', passport.authenticate('jwt', { session: false }), validator(schemaHoldingsCreate), update)
routerHoldings.delete('/deleteOne', passport.authenticate('jwt', { session: false }), deleteOne)

export default routerHoldings