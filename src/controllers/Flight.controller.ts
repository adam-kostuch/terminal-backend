import { Request, Response } from "express"
import * as mongoose from "mongoose"
import { IFlight } from "../interfaces"
import { Flight } from "../models/Flight.model"

const GetAll = async (_req: Request, res: Response): Promise<Response> => {
  try {
    return res.status(200).send(await Flight.find())
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const Add = async (req: Request, res: Response): Promise<Response> => {
  const { flightId, status, departure, arrival, departureShortcut, arrivalShortcut, departureDate, arrivalDate } = req.body
  const flight = new Flight({
    _id: new mongoose.Types.ObjectId(),
    flightId,
    status,
    departure,
    arrival,
    departureShortcut,
    arrivalShortcut,
    departureDate,
    arrivalDate
  })

  try {
    return flight
      .save()
      .then((item: IFlight) => res.status(200).send(`Item with id ${item.flightId} succesfully saved to database`))
      .catch((err: Error) => res.status(400).send(`Unable to save item ${err}`))
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const Update = async (req: Request, res: Response): Promise<Response> => {
  const { filter, flightId, status, departure, arrival, departureShortcut, arrivalShortcut, departureDate, arrivalDate, additionalInfo } =
    req.body
  const flight = await Flight.findOneAndUpdate(filter, {
    flightId,
    status,
    departure,
    arrival,
    departureShortcut,
    arrivalShortcut,
    departureDate,
    arrivalDate,
    additionalInfo
  })

  try {
    return res.status(200).send({ flight })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

const Delete = async (req: Request, res: Response): Promise<Response> => {
  const flightId = req.body.flightId
  const flight = await Flight.findOneAndDelete({ flightId })

  try {
    return res.status(200).send({ flight })
  } catch (error) {
    return res.status(500).send({ error })
  }
}

export { GetAll, Add, Update, Delete }
