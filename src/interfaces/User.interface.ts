import mongoose from "mongoose"

interface IUser extends Document {
  _id: mongoose.Schema.Types.ObjectId
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
}

export default IUser
