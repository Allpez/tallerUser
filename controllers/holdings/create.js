import Holding from "../../models/Holding.js";              //Importamos el modelo Holding.

let create = async (req, res, next) => {
    try {
        let holding = req.body;

        let newHolding = await Holding.create(holding);
        return res.status(201).json({
            response: newHolding,
        });
    } catch (error) {
        next(error); 
    }
};

let insertMany = async (req, res, next) => {
    try {
        let holdings = req.body;

        let newHoldings = await Holding.insertMany(holdings);
        return res.status(201).json({
            response: newHoldings,
        });
    } catch (error) {
        next(error);
    }
};

export { create, insertMany };
