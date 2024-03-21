import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";


const signIn = async (req, res) => {
   
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Please enter email and password" });
        }

        // Check if the user exists
        const user = await userModel.findOne({ email });
        // let token = jwt.sign({ email: user.email }, "jwt-key", { expiresIn: "1d" })
        // res.cookie("token", token)
        // console.log(token);




        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the provided password with the hashed password in the database
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Invalid password" });
        } if (match) {
            let token = jwt.sign({ email: user.email }, process.env.JWT_KEY, { expiresIn: "1d" });
            res.cookie("token",token)
            console.log(token);
        }

        // If the password is correct, return the user
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error in signIn", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export { signIn };
