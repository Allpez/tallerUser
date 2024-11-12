import { Router } from "express";
import { allInvoice, invoiceByID, invoicesByUser } from "../controllers/invoices/read.js";
import { create, insertMany } from "../controllers/invoices/create.js"
import update from "../controllers/invoices/update.js"
import deleteOne from "../controllers/invoices/delete.js"
import validator from "../middlewares/validator.js";
import schemainvoicesCreate from "../schemas/invoices/create.js";


const routerInvoices = Router()


routerInvoices.get('/all', allInvoice)
routerInvoices.get('/id/:id', invoiceByID)
routerInvoices.get('/user/:userId', invoicesByUser)
routerInvoices.post('/create', validator(schemainvoicesCreate), create) 
routerInvoices.post('/insertmany', insertMany) 
routerInvoices.put('/update', validator(schemainvoicesCreate), update)
routerInvoices.delete('/deleteOne', deleteOne)


export default routerInvoices