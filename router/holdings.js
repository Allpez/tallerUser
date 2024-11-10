import { Router } from "express";
import allHoldings from "../controllers/holdings/read.js";


const routerHoldings = Router()

routerHoldings.get('/all', allHoldings)


export default routerHoldings