import * as bcrypt from "bcrypt"
import { Request, Response } from "express"
import * as mongoose from "mongoose"
import { IUser } from "../interfaces"
import { User } from "../models/User.model"
import "../../env/config"

const GetAll = async (_req: Request, res: Response): Promise<Response> => {
  try {
    return res.status(200).send(await User.find())
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const Register = async (req: Request, res: Response): Promise<Response> => {
  const { firstName, lastName, email, password, role } = req.body
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)
  const user = new User({ _id: new mongoose.Types.ObjectId(), firstName, lastName, email, password: hashedPassword, role })

  try {
    return user
      .save()
      .then((item: IUser) => res.status(200).send(`Item with name ${item.firstName} succesfully saved to database`))
      .catch((err: Error) => res.status(400).send(`Unable to save item ${err}`))
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const Login = async (req: Request, res: Response): Promise<Response> => {
  const email = req.body.email
  const user = (await User.findOne({ email })) as IUser
  if (!user) {
    return res.status(400).send("Cannot find user")
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      return res.status(200).send({ email })
    } else {
      return res.status(200).send("Not Allowed")
    }
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const Update = async (req: Request, res: Response): Promise<Response> => {
  const { filter, firstName, lastName, email, password, role } = req.body
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)
  const user = await User.findOneAndUpdate(filter, { firstName, lastName, email, password: hashedPassword, role })

  try {
    return res.status(200).send({ user })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const Delete = async (req: Request, res: Response): Promise<Response> => {
  const email = req.body.email
  const user = await User.findOneAndDelete({ email })

  try {
    return res.status(200).send({ user })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

export { GetAll, Register, Login, Update, Delete }
