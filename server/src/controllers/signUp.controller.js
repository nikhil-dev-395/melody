import {userModel} from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const signUp = async (req, res) => {
    try {
        let {name, email, password } = req.body;
        
        if (!name || !email || !password) {
            res.status(400).json({message:"please enter name,email  &  password  correctly"})
        }
        
        let user = new userModel({
            name, email, password
        });
        let response = await user.save();
        res.status(201).json({ message: "user registered successfully", response });
        console.log(response);
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            success: false,
            error: error,
            errorMessage: error.message
        });

        if (error.code === 11000) {
            // console.log("hello error");
            process.exit(1);
        }
    }
}
export {signUp}