import * as mongoose from "mongoose"
import "../env/config"

const MONGODB_URL = process.env.MONGODB_URL || ""

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })

    console.log("Successfully connected database!")
  } catch (error) {
    console.error(`An error occured ${error.message}`)
  }
}
