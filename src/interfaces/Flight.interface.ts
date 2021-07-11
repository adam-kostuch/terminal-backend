import mongoose from "mongoose"

interface IFlight extends Document {
  _id: mongoose.Schema.Types.ObjectId
  flightId: string
  status: string
  departure: string
  arrival: string
  departureShortcut: string
  arrivalShortcut: string
  departureDate: Date
  arrivalDate: Date
}

export default IFlight
