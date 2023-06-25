import { checkUser } from "../modules/Users.js";

export const _checkUser = async (req, res) => {
    try {
        const user = await checkUser(req.body.email);
        if (user.length > 0) {
            res.status(200).json({msg : "user already exists"})
        } else {
            res.status(200).json({msg : "email not found"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({msg : error.msg})
    }
}

