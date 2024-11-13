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
                role: req.user.role,
                photo: req.user.photo
            },
            token: req.token
        })
    } catch (error) {
        next(error)
    }
}