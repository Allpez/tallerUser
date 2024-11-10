import { Schema, model } from "mongoose";

// Modelo de Registro(Factura) de la app.

let collection = 'invoices'
let schema = new Schema({
    date: { type: Date, required: true },
    description: { type: String, required: true },
    value: { type: Number, required: true },
    asset: { type: Boolean, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true } // Relación referenciada
}, {
    timestamps: true
})

let Invoice = model(collection, schema)

export default Invoice