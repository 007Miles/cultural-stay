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

// This is used to delete single item -------------------------------------------
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

// -------------------------Update the status of the reservation-------------------------------------------
export const updateReservationStatus = async (req, res, next) => {
  try {
    const { id } = req.params // Get the reservation ID from the request parameters
    const { status } = req.body // Get the new status from the request body

    // Find the reservation by its ID and update the status
    const updatedReservation = await AccommodationReserve.findOneAndUpdate(
      { _id: id },
      { status },
      { new: true, runValidators: true }
    )

    if (!updatedReservation) {
      return res.status(404).json({ message: 'Reservation not found' })
    }

    res.status(200).json(updatedReservation)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error updating reservation status' })
  }
}

// Get reservation by hostId and status equal to pending Reservation
export const getPendingReservationsByHostId = async (req, res, next) => {
  try {
    const { hostId } = req.params

    if (!hostId) {
      return res.status(400).json({ message: 'Host ID is required' })
    }

    const pendingReservations = await AccommodationReserve.find({
      hostId: hostId,
      status: 'pending',
    })

    if (pendingReservations.length === 0) {
      return res.status(404).json({ message: 'No pending reservations found' })
    }

    return res.status(200).json({ pendingReservations })
  } catch (error) {
    console.error('Error fetching pending reservations:', error)
    return res
      .status(500)
      .json({ message: 'Error fetching pending reservations' })
  }
}
