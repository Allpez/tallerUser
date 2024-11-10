import Holding from "../../models/Holding.js";              //Importamos el modelo Holding.
import "../../models/User.js";                              //Importamos el modelo para usarlo en la variable holding.

let allHoldings = async (req,res,next) => {
    try {
        let { name } = req.query                            //Parametros
        let query = {}                                      //Enviamos un objeto vacio para traer todos los Usuarios.
        if (name) {
            query.name = {$regex:'^'+name, $options: 'i'}   //Prevalidaciones
        }
        let holding = await  Holding.find(query).populate('userId','_id').exec(); //Relaciones entre documentos en mongo

        return res.status(200).json({
            response: holding
        })
    } catch (error) {
        next(error)
    }        
}

export default allHoldings