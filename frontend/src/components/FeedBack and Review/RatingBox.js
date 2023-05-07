import React from 'react'

export default function RatingBox() {
  return (
    <div>
      {' '}
      <div className="w-full md:w-1/3 flex flex-wrap">
        <div className="max-w-sm md:max-w-sm rounded-xl overflow-hidden shadow-lg bg-white h-[320px] w-[350px] mr-0 ml-16 ">
          <div className="px-6 py-2">
            <div className="font-bold text-xl  text-left mt-4 mb-5">
              Rs.2500.00/night
            </div>

            <div className="rounded-lg overflow-hidden border border-gray-200  mb-5">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Available From
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Available To
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-xs leading-5 text-gray-900">
                        2023-10-10
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-xs leading-5 text-gray-900">
                        2023-10-10
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 text-sm text-left">
              <span>Status : </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-xs font-semibold text-white-700">
                Available
              </span>
            </p>
          </div>
          <div className="px-6 pt-2 pb-2 text-left">
            <button className="w-full p-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
