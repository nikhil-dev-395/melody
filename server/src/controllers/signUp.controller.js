import {userModel} from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const signUp = async(req,res) => {
    let { name, email, password } = req.body;
    try {

        // checking we 
        if (!name || !email||!password) {
            res.send({ message: "please enter name,email,password" });

        };

        //checking if user is existed or not

        const existUser = await userModel.findOne({ email });
        if (existUser) {
          return  res.send("user already existed")
        }



        const hashPassword = await bcrypt.hash(password, 10);
         
        if (name || email || password) {
            let user = await userModel.create({ name, email, password: hashPassword });
            let saveUser = await user.save();
            res.send(saveUser)
        }
       
    } catch (error) {
        console.log("error in signup", res.send({ error }));
        res.status(400).send({message:"internal server error",error})
    }
}
export {signUp}