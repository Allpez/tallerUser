import User from "../../models/User.js";

let register = async (req, res, next) => {
    try {
        let user = req.body;

        let newUser = await User.create(user);
        return res.status(201).json({
            response: newUser,
        });
    } catch (error) {
        next(error); 
    }
};

let insertMany = async (req, res, next) => {
    try {
        let users = req.body;

        let newUsers = await User.insertMany(users);
        return res.status(201).json({
            response: newUsers,
        });
    } catch (error) {
        next(error);
    }
};

export { register, insertMany };
