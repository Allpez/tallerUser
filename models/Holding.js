import { Schema, model } from "mongoose";

// Modelo de Propiedad de la app.

let collection = 'holdings'
let schema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users' } // Relación referenciada
}, {
    timestamps: true
})

let Holding = model(collection, schema)

export default Holding