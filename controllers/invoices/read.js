import Invoice from "../../models/Invoice.js";              //Importamos el modelo Holding.
import "../../models/User.js";                              //Importamos el modelo para usarlo en la variable holding.

let allInvoices = async (req,res,next) => {
    try {
        let { name } = req.query                            //Parametros
        let query = {}                                      //Enviamos un objeto vacio para traer todos los Usuarios.
        if (name) {
            query.name = {$regex:'^'+name, $options: 'i'}   //Prevalidaciones
        }
        let invoice = await  Invoice.find(query).populate('userId','_id').exec(); //Relaciones entre documentos en mongo

        return res.status(200).json({
            response: invoice
        })
    } catch (error) {
        next(error)
    }        
}

export default allInvoices