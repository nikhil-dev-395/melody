import { userModel } from "../models/User.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SignUp = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    //checking user existed or not
    let existed = await userModel.findOne({ email });
    if (existed)
      return res.status(409).json({ message: "user existed already!!" });

    let hashPassword = await bcrypt.hash(password, 10); // for hashing password

    if (!name || !email || !password) {
      return res.status(400).send("please enter the all fields!");
    }

    let user = await userModel.create({ name, email, password: hashPassword });
    user = await user.save();
    // Passwords match, authentication successful
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    // res.cookie("token", token, user, {
    //   maxAge: 3600000,
    //   httpOnly: true,
    //   secure: true,
    // });

    //sending response
    res.status(201).json({ message: "user created", token, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export { SignUp };
//we are on working with cookie
