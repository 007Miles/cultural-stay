import React, { useState, useEffect } from 'react'

const EditPersonalInformation = () => {
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
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
          Profile
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-green-600">
          All Reservations
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-red-600">
          Reservation History
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white font-semibold rounded hover:bg-red-600">
          Accommodation Edit
        </button>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <form className=" p-6 ">
          <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 text-center uppercase font-bold">
                    Personal Information
                  </h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Full name
                      </dt>
                      <input
                        type="String"
                        name="Name"
                        readOnly
                        value={'Hettie'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Email address
                      </dt>
                      <input
                        type="email"
                        value={'Hettie@gmail.com'}
                        placeholder="Email"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Phone number
                      </dt>
                      <input
                        type="string"
                        value={'7745214521'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Address
                      </dt>
                      <input
                        type="string"
                        value={'Kamburugamuwa, Southern Province, Sri Lanka '}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Languages
                      </dt>
                      <input
                        type="string"
                        value={' English,Sinhala'}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                  </dl>
                </div>
              </div>
              <div className="flex justify-end mb-4 mt-5">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
                  <a class="nav-link" href="/hostDashboardProfile">
                    Cancel
                  </a>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPersonalInformation
