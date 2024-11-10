import express from "express";  // Importamos express de la carpeta "node_modules", este archivo levantará la aplicación
import "dotenv/config.js";      // Nos poermite acceder a las variables de entorno.
import "./config/database.js"   // Llamamos la conexion a la base de datos.
import cors from "cors";        //Seguridad, nos permite tener un filtro para el control de peticiones externas.
import morgan from "morgan";    //Libreria que nos ayuda a llevar un registro de las peiciones que recibimos en consola.
import indexRouter from "./router/index.js"; //Importamos el enrutador principal.

//Importamos los middlewares
import not_found_handler from "./middlewares/not_found_handler.js"  //404
import error_handler from "./middlewares/error_handler.js"          //500
import bad_request from "./middlewares/bad_request.js"              //400


const server = express();                           //Creamos la variable server donde se ejecutara express.

const PORT = process.env.PORT || 8080               //Variable PORT donde se almacenara la ruta al servidor (variable de entorno).

const ready = () => console.log(`Server ready in port: ${PORT}`); //Función parea retornar el estado en la terminal.

//Middleware para express, se colocan sobre el listener antes de levantar el servidor para que sepa que middleware se le van a aplicar en base.
server.use(express.json())                          //Las peticiones que va a recibir y responder seran en formato JSON.
server.use(express.urlencoded({extended: true}))    //Nos permite recibir parametros y querys complejos.
server.use(cors())                                  //Filtro para controlar las peticiones externas / origenes cruzados.
server.use(morgan('dev'))                           //Libreria que nos va a ayudar a controlar y ver las peticiones HTTP que lleguen al servidor.

//Configuracion del router
server.use('/api', indexRouter)
server.use(not_found_handler)   //404
server.use(bad_request)         //400
server.use(error_handler)       //500

console.log(process.env.PORT);

server.listen(PORT,ready);   //utilizamos la propiedad "listen" para escuchar el puerto y levantar el servidor
