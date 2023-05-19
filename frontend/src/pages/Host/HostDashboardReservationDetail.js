import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HostDashboardReservationDetail = () => {
  const [reservation, setReservation] = useState(null)
  const [acceptStatus, setAcceptStatus] = useState('')
  const [declineStatus, setDeclineStatus] = useState('')

  const location = useLocation()

  const id = location.pathname.split('/')[2]

  const handleAcceptClick = () => {
    const data = { status: 'Accepted' }

    const confirmAccept = window.confirm('Are you sure you want to Accept?')
    if (confirmAccept) {
      axios
        .post(`http://localhost:4000/api/accommodationReserve/${id}`, data)
        .then((response) => {
          setAcceptStatus('Accepted')
          console.log(response.data)
          window.alert('Reservation Accepted')
          window.location.href = '/hostDashboardReservationAll' // Redirect to the specified page
        })
        .catch((error) => {
          setAcceptStatus('Error')
          console.error(error)
          window.alert('Something Went Wrong....')
        })
    }
  }

  const handleDeclineClick = () => {
    const data = { status: 'Declined' }
    const confirmDecline = window.confirm('Are you sure you want to Decline?')
    if (confirmDecline) {
      axios
        .post(`http://localhost:4000/api/accommodationReserve/${id}`, data)
        .then((response) => {
          setDeclineStatus('Declined')
          console.log(response.data)
          window.alert('Reservation Declined')
          window.location.href = '/hostDashboardReservationAll' // Redirect to the specified page
        })
        .catch((error) => {
          setDeclineStatus('Error')
          console.error(error)
          window.alert('Something Went Wrong....')
        })
    }
  }

  useEffect(() => {
    fetch(`http://localhost:4000/api/accommodationReserve/${id}`)
      .then((response) => response.json())
      .then((data) => setReservation(data.reservation))
      .catch((error) => console.error(error.reservation))
  }, [])

  if (!reservation) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900 uppercase">
            Dashboard
          </h1>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-5">
        <button className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-blue-600">
          <a class="nav-link" href="/hostDashboardProfile">
            Profile
          </a>
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-green-600">
          <a class="nav-link" href="/hostDashboardReservationAll">
            All Reservations
          </a>
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-red-600">
          <a class="nav-link" href="/hostDashboardReservationHistory">
            Reservation History
          </a>
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-red-600">
          <a class="nav-link" href="/hostDashboardPlaceUpdate">
            Accommodation Edit
          </a>
        </button>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="min-h-screen bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
              {/* Reservation details */}
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 text-center uppercase font-bold">
                  Detail View
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 text-left">
                      Reserver Name :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                      {reservation.rp_name}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 text-left">
                      Reserver Email :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                      {reservation.rp_email}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 text-left">
                      Reserver Phone Number :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                      {reservation.rp_phone}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 text-left">
                      Reserve Date From :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                      {new Date(reservation.reserve_from)
                        .toISOString()
                        .substring(0, 10)}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 text-left">
                      Reserve Date To :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                      {new Date(reservation.reserve_to)
                        .toISOString()
                        .substring(0, 10)}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 text-left">
                      Languages :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                      {reservation.rp_languages}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 text-left">
                      Description :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                      {reservation.description}
                    </dd>
                  </div>

                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 text-left">
                      No of Passengers :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                      {reservation.rp_noofPassengers}
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 text-left">
                      Country :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                      {reservation.rp_country}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleAcceptClick}
              >
                Accept
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleDeclineClick}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostDashboardReservationDetail
