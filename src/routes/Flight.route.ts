import * as express from "express"
import { GetAll, Add, Update, Delete } from "../controllers/Flight.controller"

const FlightRouter = express.Router()

FlightRouter.get("/", GetAll)
FlightRouter.post("/add", Add)
FlightRouter.delete("/delete", Delete)
FlightRouter.put("/update", Update)

export default FlightRouter
