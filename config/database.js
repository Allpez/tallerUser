import mongoose from "mongoose"; //Importamos la libreria mongoose para poder conectarnos a la base de datos.

let url = process.env.URI_MONGO

mongoose.connect(url)
.then(() => console.log("Base de datos conectada"))
.catch(error => console.log(error))

//O mediante una funcion tipo JavaScript

async function conectionToDataBase() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
    }
}

conectionToDataBase()