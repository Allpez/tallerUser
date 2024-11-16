//Para iniciar sesion con un externo.

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20"; //Strategy as GoogleStrategy: para cambiarle el nombre a las variables
import User from "../models/User.js";

export default passport.use(
    new GoogleStrategy(  //3 Datos
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK
        },
        async (accesToken, refreshToken, profile, done) => {
            //Buscvar si el usuario esta en la base de datos
            console.log(profile);

            try {
                let user = await User.findOne({ email: profile.emails[0].value })
                if (!user) {
                    //Si el usuario no existe, creo uno nuevo.
                    user = new User({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        online: false,
                        password: profile.id
                    })
                    await user.save()
                }
                return done(null, user)

            } catch (error) {
                return done(error, null)
            }
        }
    )
)