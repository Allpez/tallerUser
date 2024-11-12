import Invoice from "../../models/Invoice.js"

const update = async (req, res, next) => { //Reciubimos los 3 parametros basicos
    try {
        let invoice = req.body
        await Invoice.updateOne( //Este método busca el primer documento que cumple ciertas condiciones y lo modifica. Por defecto, no devuelve el documento modificado.
            //Recibe 2 objetos
            { _id: invoice._id }, //condiciones de busqueda una o varias. (ej: _id: user._id, name: user.name)
            { value: invoice.value, asset: invoice.asset } //modificaciones
        )
        return res.status(200).json({
            responde: invoice
        })

    } catch (error) {
        next(error)
    }
}

export default update