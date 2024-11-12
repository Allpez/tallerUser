import Holding from "../../models/Holding.js";              //Importamos el modelo Holding.

const update = async (req, res, next) => { //Reciubimos los 3 parametros basicos
    try {
        let holding = req.body
        await Holding.updateOne( //Este método busca el primer documento que cumple ciertas condiciones y lo modifica. Por defecto, no devuelve el documento modificado.
            //Recibe 2 objetos
            { _id: holding._id }, //condiciones de busqueda una o varias. (ej: _id: user._id, name: user.name)
            { name: holding.name, value: holding.value } //modificaciones
        )
        return res.status(200).json({
            responde: holding
        })

    } catch (error) {
        next(error)
    }
}

export default update