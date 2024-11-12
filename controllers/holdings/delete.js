import Holding from "../../models/Holding.js";              //Importamos el modelo Holding.

let deleteOne = async (req, res, next) => {
    try {
        let deleteHolding = await Holding.deleteOne({ //El metodo que utilizamos para eliminar 1
            _id: req.body._id //Condiciones para buscar el que compla la condicion y eliminarlo
            // Este método busca el primer documento que cumple ciertas condiciones y lo elimina. Devuelve una propiedad deletedCount con la cantidad de documentos eliminados (aunque en este caso sea solo uno).
        })
        return res.status(200).json({
            response: deleteHolding
        })
    } catch (error) {
        next(error)
    }
}

export default deleteOne
