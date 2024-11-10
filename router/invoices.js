import { Router } from "express";
import allInvoices from "../controllers/invoices/read.js";


const routerInvoices = Router()

routerInvoices.get('/all', allInvoices)


export default routerInvoices