import { SignIn } from "../controllers/SignIn.controllers.js";
import { SignUp } from "../controllers/SignUp.controllers.js";
import { Router } from "express";

const router = Router();

router.post("/register", SignUp);
router.post("/login",SignIn);

export {router as userRouter}