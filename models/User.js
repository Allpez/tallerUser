import { Schema, model } from "mongoose";

// Modelo de Usuario de la app.

let collection = 'users'
let schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    online: { type: Boolean }
}, {
    timestamps: true
})

let User = model(collection, schema)

export default User