import { userModel } from "../models/User.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SignIn = async (req, res) => {
  let { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please enter email and password" });
    }

    // Compare the provided password with the hashed password stored in the database
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Passwords match, authentication successful
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    // res.cookie("token", token, {
    //   maxAge: 3600000,
    //   httpOnly: true,
    //   secure: true,
    // });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { SignIn };
