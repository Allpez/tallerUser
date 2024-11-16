import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate( //Recibe 2 objetos, 1.- Como lo va a buscar, 2-. cambia la sig. propiedad.
            { email: req.body.email },
            { online: false }
        )
        console.log(req);
        
        return res.status(200).json({
            succes: true,
            message: "Disconnected",
            token: req.token
        })
    } catch (error) {
        next(error)
    }
}