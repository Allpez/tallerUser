import Holding from "../../models/Holding.js";              //Importamos el modelo Holding.

let allHolding = async (req, res, next) => {
    try {
        let {name} = req.query 
        let query = {} //Enviamos un objeto vacio, para traer a todos los usuarios

        if (name){
            query.name = {$regex: '^'+name, $options: 'i'} //Prevalidaciones
        }
        
        let holding = await Holding.find(query).populate('userId', 'name email phone').exec();
        return res.status(200).json({
            response: holding
        });
    } catch (error) {
        next(error);
    }
};

let holdingByID = async (req, res, next) => {
    try {
        let idQuery = req.params.id;
        let holding = await Holding.findById(idQuery);
        return res.status(200).json({
            response: holding
        });
    } catch (error) {
        next(error);
    }
};

let holdingByUser = async (req, res, next) => {
    try {
        let userId = req.params.userId;

        let holdings = await Holding.find({ userId }).populate('userId', 'name email phone').exec();
        
        if (!holdings || holdings.length === 0) {
            return res.status(404).json({ message: "No holdings found for this user" });
        }

        return res.status(200).json({
            response: holdings
        });
    } catch (error) {
        next(error);
    }
};

export { allHolding, holdingByID, holdingByUser }