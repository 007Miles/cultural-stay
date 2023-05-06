import React from 'react'

const editPersonalInformation = () => {
  return (
    <form className=" p-6 ">
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              My Profile
            </h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 text-center uppercase font-bold">
                Personal Information
              </h3>
              {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Fill in your personal information below.
            </p> */}
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
                    value={'Kasun'}
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-base font-medium text-gray-500">
                    Email address
                  </dt>
                  <input
                    type="email"
                    value={'kasun@gmail.com'}
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
                    value={'07785412145'}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-base font-medium text-gray-500">
                    Address
                  </dt>
                  <input
                    type="string"
                    value={'Colombo '}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-base font-medium text-gray-500">
                    Languages
                  </dt>
                  <input
                    type="string"
                    value={' English, Sinhala'}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              </dl>
            </div>
          </div>
          <div className="flex justify-end mb-4 mt-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Cancel
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default editPersonalInformation
