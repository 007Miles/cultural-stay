import React, { useState } from 'react'
import personalInformation from '../../components/Host/personalInformation.js'
import editPersonalInformation from '../../components/Host/editPersonalInformation.js'

const HostDashboardReservationDetail = () => {
  return (
    <div className="max-w-lg mx-auto mt-5">
      <h2 className="text-2xl font-bold mb-4">Detail View</h2>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex justify-between mb-2">
          <div className="font-medium text-gray-600">Reserver Name:</div>
          <div>dfdfdf</div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="font-medium text-gray-600">Reserver Email:</div>
          <div>dfdfdf</div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="font-medium text-gray-600">
            Reserver Phone Number:
          </div>
          <div>dfdfdf</div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="font-medium text-gray-600">Reserve Date From:</div>
          <div>dfdfd</div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="font-medium text-gray-600">Reserve Date To:</div>
          <div>dfdfdfd</div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="font-medium text-gray-600">Languages:</div>
          <div>dfdfdf</div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="font-medium text-gray-600">Description:</div>
          <div>dfdfdf</div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="font-medium text-gray-600">No of Passengers:</div>
          <div>dfdfdf</div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
          Accept
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Decline
        </button>
      </div>
    </div>
  )
}

export default HostDashboardReservationDetail
