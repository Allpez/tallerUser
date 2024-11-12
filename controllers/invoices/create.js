import Invoice from "../../models/Invoice.js"

let create = async (req, res, next) => {
    try {
        let invoice = req.body;

        let newInvoice = await Invoice.create(invoice);
        return res.status(201).json({
            response: newInvoice,
        });
    } catch (error) {
        next(error); 
    }
};

let insertMany = async (req, res, next) => {
    try {
        let invoices = req.body;

        let newInvoices = await Invoice.insertMany(invoices);
        return res.status(201).json({
            response: newInvoices,
        });
    } catch (error) {
        next(error);
    }
};

export { create, insertMany };
