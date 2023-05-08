import React, { useState, useEffect } from 'react'

const HostDashboardPlaceUpdate = () => {
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
        <button className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-green-600">
          <a class="nav-link" href="/hostDashboardReservationAll">
            All Reservations
          </a>
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-red-600">
          <a class="nav-link" href="/hostDashboardReservationHistory">
            Reservation History
          </a>
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-red-600">
          <a class="nav-link" href="/hostDashboardPlaceUpdate">
            Accommodation Edit
          </a>
        </button>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <form className=" p-6 ">
          <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 text-center uppercase font-bold">
                    Accommodation Details
                  </h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Accommodation Name
                      </dt>
                      <input
                        type="String"
                        readOnly
                        value={
                          'Punchi Doowa, Private Mud House Near Kamburugamuwa'
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Accommodation Address
                      </dt>
                      <input
                        type="String"
                        value={'Kamburugamuwa, Southern Province, Sri Lanka'}
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Province
                      </dt>
                      <input
                        type="string"
                        value={'Southern Province'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Google map link
                      </dt>
                      <input
                        type="string"
                        value={'Kamburugamuwa, Southern Province, Sri Lanka '}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Location Availability From
                      </dt>
                      <input
                        type="date"
                        value={' 2023-05-10'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Location Availability To
                      </dt>
                      <input
                        type="date"
                        value={' 2023-05-15'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        No Of guests welcome
                      </dt>
                      <input
                        type="number"
                        value={'4'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        No Of Bedrooms
                      </dt>
                      <input
                        type="number"
                        value={'2'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        No Of Beds
                      </dt>
                      <input
                        type="number"
                        value={'2'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        No Of Washrooms
                      </dt>
                      <input
                        type="number"
                        value={'1'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Price per night
                      </dt>
                      <input
                        type="number"
                        value={'4500'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Welcome parties
                      </dt>
                      <input
                        type="string"
                        value={'Families'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Description
                      </dt>
                      <textarea
                        id="description"
                        name="description"
                        value={
                          "Discover the authentic charm of Sri Lanka with a unique vllage home stay experience. Immerse yourself in the serene beauty of the countryside, where lush green paddy fields stretch as far as the eye can see, and traditional mud houses stand as proud reminders of the country's rich heritage"
                        }
                        rows="3"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter a description"
                      ></textarea>
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Facilities
                      </dt>
                      <input
                        type="string"
                        value={'Wi-Fi,Cooking classes,Free parking,Kitchen'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Images
                      </dt>
                      <input
                        id="images"
                        name="images"
                        type="file"
                        multiple
                        accept="image/*"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </dl>
                </div>
              </div>
              <div className="flex justify-end mb-4 mt-5">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Cancel
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HostDashboardPlaceUpdate
