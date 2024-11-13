import Invoice from "../../models/Invoice.js"

let allInvoice = async (req, res, next) => {
    try {
        let {name} = req.query 
        let query = {} //Enviamos un objeto vacio, para traer a todos los usuarios

        if (name){
            query.name = {$regex: '^'+name, $options: 'i'} //Prevalidaciones
        }
        
        let invoice = await Invoice.find(query).populate('userId', 'name email phone').exec();
        return res.status(200).json({
            response: invoice
        });
    } catch (error) {
        next(error);
    }
};

let invoiceByID = async (req, res, next) => {
    try {
        let idQuery = req.params.id;
        let invoice = await Invoice.findById(idQuery);
        return res.status(200).json({
            response: invoice
        });
    } catch (error) {
        next(error);
    }
};

let invoicesByUser = async (req, res, next) => {
    try {
        let userId = req.params.userId;

        let invoices = await Invoice.find({ userId }).populate('userId', 'name email phone').exec();
        
        if (!invoices || invoices.length === 0) {
            return res.status(404).json({ message: "No invoices found for this user" });
        }

        return res.status(200).json({
            response: invoices
        });
    } catch (error) {
        next(error);
    }
};

export { allInvoice, invoiceByID, invoicesByUser }