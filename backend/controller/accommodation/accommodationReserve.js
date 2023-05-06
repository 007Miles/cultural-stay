// import AccommodationReserve from '../../models/Accommodation/AccommodationReserve'
import AccommodationReserve from '../../models/Accommodation/AccommodationReserve.js'
import asyncWrapper from '../../middleware/Host/async.js'
import { createCustomError } from '../../errors/Host/custom-error.js'

// This is used to retriew all reservations-----------------------------------------------------
export const getAllReservation = asyncWrapper(async (req, res) => {
  const reservation = await AccommodationReserve.find({})
  res.status(200).json({ reservation })
})
// -------------------------------------------------------------------------------------------

// This is used to add a single reservation---------------------------------------
export const addReserve = asyncWrapper(async (req, res) => {
  const reservation = await AccommodationReserve.create(req.body)
  res.status(201).json({ reservation })
})
// -------------------------------------------------------------------------------------------

// export const updatehost = asyncWrapper(async (req, res) => {
//   const { id: hostID } = req.params

//   const hosts = await Host.findOneAndUpdate({ _id: hostID }, req.body, {
//     new: true,
//     runValidators: true,
//   })

//   if (!hosts) {
//     return next(createCustomError(`No Host with this id: ${hostID}`, 404))
//   }

//   res.status(200).json({ hosts })
// })
// -------------------------------------------------------------------------------------------

// This is used to delete single item from the cart-------------------------------------------
export const deletereservation = asyncWrapper(async (req, res) => {
  const { id: reserveID } = req.params
  const reservation = await AccommodationReserve.findOneAndDelete({
    _id: reserveID,
  })
  if (!reservation) {
    return next(
      createCustomError(`No reservation with this id: ${reserveID}`, 404)
    )
  }

  res.status(200).json({ reservation })
})
// -------------------------------------------------------------------------------------------
