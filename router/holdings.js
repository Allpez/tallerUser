import { Router } from "express";
import { allHolding, holdingByID, holdingByUser } from "../controllers/holdings/read.js";
import { create, insertMany } from "../controllers/holdings/create.js";
import update from "../controllers/holdings/update.js";
import deleteOne from "../controllers/holdings/delete.js";
import validator from "../middlewares/validator.js";
import schemaHoldingsCreate from "../schemas/holdings/create.js";

const routerHoldings = Router()

routerHoldings.get('/all', allHolding)
routerHoldings.get('/id/:id', holdingByID)
routerHoldings.get('/user/:userId', holdingByUser)
routerHoldings.post('/create', validator(schemaHoldingsCreate), create)
routerHoldings.post('/insertmany', insertMany)
routerHoldings.put('/update', validator(schemaHoldingsCreate), update)
routerHoldings.delete('/deleteOne', deleteOne)

export default routerHoldings