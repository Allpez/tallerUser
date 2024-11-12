import { Router } from "express";
import { allInvoice, invoiceByID, invoicesByUser } from "../controllers/invoices/read.js";
import { create,insertMany } from "../controllers/invoices/create.js"
import update from "../controllers/invoices/update.js"
import deleteOne from "../controllers/invoices/delete.js"

const routerInvoices = Router()


routerInvoices.get('/all', allInvoice)
routerInvoices.get('/id/:id', invoiceByID)
routerInvoices.get('/user/:userId', invoicesByUser)
routerInvoices.post('/create',create)          //Enrutador para "Crear nuevo usuario"
routerInvoices.post('/insertmany',insertMany)  //Enrutador para "Crear nuevos usuarios"
routerInvoices.put('/update', update)          //Creamos un enrutador para actualizar un elementos en la data
routerInvoices.delete('/deleteOne', deleteOne) //Creamos un enrutador para eliminar un elemento de la data


export default routerInvoices