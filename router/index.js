//*** Enrutador principal ***

import { Router } from "express";
import usersRouter from "./users.js";          //Importamos el enrutador de Usuarios
import holdingsRouter from "./holdings.js";    //Importamos el enrutador de Propiedades
import invoicesRouter from "./invoices.js";    //Importamos el enrutador de Facturas

const indexRouter = Router()

indexRouter.use('/users', usersRouter);             //Solicitud que nos redirije a la ruta de Usuarios.
indexRouter.use('/holdings', holdingsRouter);       //Solicitud que nos redirije a la ruta de Propiedades.
indexRouter.use('/invoices', invoicesRouter);       //Solicitud que nos redirije a la ruta de Facturas.

export default indexRouter