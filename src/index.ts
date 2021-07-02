import { Application, Request, Response } from "express"
import * as express from "express"
import "../env/config"

const app: Application = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", async (_req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  })
})

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`)
  })
} catch (error) {
  console.error(`Error occured: ${error.message}`)
}
