import express from "express"
import { loginUser, registerUser } from "../controllers/userController.js"

const userRouter = express.Router()
//aqui estou importando a funcionalidade de usercontroller
//como registerUser ="/register"loginUser="/login"

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

export default userRouter;

