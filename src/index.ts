import * as express from "express"
import { Application, Request, Response, NextFunction } from "express"
import { connectDB } from "../db/config"
import { UserRouter } from "./routes"
import "../env/config"

connectDB()
const app: Application = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
  }
  next()
})

app.use("/users", UserRouter)

app.get("/", async (_req: Request, res: Response): Promise<Response> => {
  return res.status(200).send("Hello World")
})

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`)
  })
} catch (error) {
  console.error(`Error occured: ${error.message}`)
}
