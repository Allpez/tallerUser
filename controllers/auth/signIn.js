import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate( //Recibe 2 objetos, 1.- Como lo va a buscar, 2-. cambia la sig. propiedad.
            { email: req.body.email },
            { online: true }
        )
        console.log(req);
        
        return res.status(200).json({
            succes: true,
            message: "segned In",
            user: {
                email: req.user.email,
                password: req.user.password,
                name: req.user.name,
                phone: req.user.phone
            },
            token: req.token
        })
    } catch (error) {
        next(error)
    }
}