// import express from "express";

import { Router } from "express";
import { signUp } from "../controllers/signUp.controller.js";
import { signIn } from "../controllers/SignIn.controller.js";
const router = Router()

router.post("/signup", signUp);
router.post("/signin", signIn);

export {router as userRouter}