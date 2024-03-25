import mongoose, { modelNames } from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const userModel = mongoose.model("User", userSchema);
export {userModel}