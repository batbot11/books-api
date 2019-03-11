import express from "express";
import User from "./User";

const router = express.Router();

router.post("/", (req, res) => {
   const {data} = req.body;
    User.findOne({email: data.email}).then(user => {
        if (user && user.isValidPassword(data.password)) 
        return res.status(200).json({user: user.toAuthJSON()})
        else return res.status(400).json({errors: {global: "Invalid Credentials"}})
    })
})

export default router;