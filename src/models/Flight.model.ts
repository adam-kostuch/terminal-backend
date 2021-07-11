import * as mongoose from "mongoose"
import { IFlight } from "../interfaces"

const FlightSchema = new mongoose.Schema<IFlight>({
  _id: mongoose.Schema.Types.ObjectId,
  flightId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  departure: {
    type: String,
    required: true
  },
  arrival: {
    type: String,
    required: true
  },
  departureShortcut: {
    type: String,
    required: true
  },
  arrivalShortcut: {
    type: String,
    required: true
  },
  departureDate: {
    type: Date,
    required: true
  },
  arrivalDate: {
    type: Date,
    required: true
  }
})

const Flight = mongoose.model("flights", FlightSchema)

export { Flight, FlightSchema }
