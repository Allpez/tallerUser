import User from "../../models/User.js"



let allUser = async (req, res, next) => {
    try {
        let {name} = req.query 
        let query = {} //Enviamos un objeto vacio, para traer a todos los usuarios

        if (name){
            query.name = {$regex: '^'+name, $options: 'i'} //Prevalidaciones
        }
        
        let user = await User.find(query);
        return res.status(200).json({
            response: user
        });
    } catch (error) {
        next(error);
    }
};

export default allUser