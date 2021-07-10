import * as express from "express"
import { GetAll, Register, Login, Delete, Update } from "../controllers/User.controller"

const UserRouter = express.Router()

UserRouter.get("/", GetAll)
UserRouter.post("/register", Register)
UserRouter.post("/login", Login)
UserRouter.post("/delete", Delete)
UserRouter.post("/update", Update)

export default UserRouter
