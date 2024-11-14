import { Router } from "express";
import { allInvoice, invoiceByID, invoicesByUser } from "../controllers/invoices/read.js";
import { create, insertMany } from "../controllers/invoices/create.js"
import update from "../controllers/invoices/update.js"
import deleteOne from "../controllers/invoices/delete.js"
import validator from "../middlewares/validator.js";
import schemainvoicesCreate from "../schemas/invoices/create.js";
import schemainvoicesUpdate from "../schemas/invoices/update.js";
import passport from "../middlewares/passport.js";

const routerInvoices = Router()

routerInvoices.get('/all', passport.authenticate('jwt', { session: false }), allInvoice)
routerInvoices.get('/id/:id', passport.authenticate('jwt', { session: false }), invoiceByID)
routerInvoices.get('/user/:userId', passport.authenticate('jwt', { session: false }), invoicesByUser)
routerInvoices.post('/create', passport.authenticate('jwt', { session: false }), validator(schemainvoicesCreate), create)
routerInvoices.post('/insertmany', passport.authenticate('jwt', { session: false }), insertMany)
routerInvoices.put('/update', passport.authenticate('jwt', { session: false }), validator(schemainvoicesUpdate), update)
routerInvoices.delete('/deleteOne', passport.authenticate('jwt', { session: false }), deleteOne)


export default routerInvoices