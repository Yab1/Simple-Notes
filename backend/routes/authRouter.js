import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";

const authRouter = Router();

// Sign up route
authRouter.post("/signup", signUp);

// Sign in route
authRouter.post("/signin", signIn);

export default authRouter;
