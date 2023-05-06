import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import AccommodationOffer from '../../components/Accommodation/AccommodationOffer.js'
import ReserveForm from '../../components/Accommodation/ReserveForm.js'
import { FaKey } from 'react-icons/fa'

const AccommodationDetails = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div>
      <div className=" mx-64 my-14">
        <div className="mb-6">
          <div className="font-bold text-2xl  text-left">
            Punchi Doowa, private island villa near Mirissa
          </div>
          <p className="text-sm text-left underline">
            Kamburugamuwa, Southern Province, Sri Lanka
          </p>
        </div>
        {/* -------------------------------------------------------------------------Images----------------------------------------------------------------------------- */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/itp03/image/upload/v1683190713/afAccommodation/mirissa-hills-mount-cinnamon-sri-lanka_ezbzhn.jpg"
              alt="Large Image"
              className="w-full rounded-l-lg mr-4 h-[300px]"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap">
            <div className="w-full md:w-1/2 flex flex-wrap">
              <div className="w-1/2 md:w-full">
                <img
                  src="https://res.cloudinary.com/itp03/image/upload/v1683190713/afAccommodation/mirissa-hills-mount-cinnamon-sri-lanka_ezbzhn.jpg"
                  alt="Small Image 1"
                  className="w-full mx-2 mb-2"
                />
              </div>
              <div className="w-1/2 md:w-full">
                <img
                  src="https://res.cloudinary.com/itp03/image/upload/v1683190713/afAccommodation/mirissa-hills-mount-cinnamon-sri-lanka_ezbzhn.jpg"
                  alt="Small Image 2"
                  className="w-full mx-2"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-wrap">
              <div className="w-1/2 md:w-full">
                <img
                  src="https://res.cloudinary.com/itp03/image/upload/v1683190713/afAccommodation/mirissa-hills-mount-cinnamon-sri-lanka_ezbzhn.jpg"
                  alt="Small Image 3"
                  className="w-full rounded-tr-lg ml-4 mb-2"
                />
              </div>
              <div className="w-1/2 md:w-full">
                <img
                  src="https://res.cloudinary.com/itp03/image/upload/v1683190713/afAccommodation/mirissa-hills-mount-cinnamon-sri-lanka_ezbzhn.jpg"
                  alt="Small Image 4"
                  className="w-full rounded-br-lg ml-4 "
                />
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------Content------------------------------------------------------------- */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-5 ">
          <div className="w-full md:w-2/3 mb-6  mt:2x">
            <div className="mb-6">
              <div className="font-bold text-2xl  text-left">
                Entire villa hosted by Hettie
              </div>
              <p className="text-sm text-left ">
                2 guests | 1 bedroom | 1bed | 1bath
              </p>
              {/* <div className="  flex justify-end">
                <img
                  src="https://res.cloudinary.com/itp03/image/upload/v1683223861/afAccommodation/people-of-sri-lanka-DPGWW7_ppfxqf.jpg"
                  alt="Profile Picture"
                  className="h-12 w-12 rounded-full mr-4"
                />
              </div> */}

              <hr className="border-b border-gray-300 my-8" />

              <div>
                <div className="font-bold text-2xl  text-left">
                  <div className="flex items-center mt-4">
                    <FaKey className="text-xl text-gray-700" />
                    <div className="text-gray-700 font-bold text-lg ml-4">
                      Smart lock
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              </div>

              <hr className="border-b border-gray-300 my-8" />

              <div>
                <div className="font-bold text-2xl  text-left">
                  <div className="flex items-center mt-4">
                    <div className="text-gray-700  text-base ml-4 text-justify">
                      Punchi Doowa which translates to little Island is a home
                      nestled on its own paddy island with expansive views of
                      the coconut plantation. Offering a unique stay, close to
                      the picturesque bustle of village life but still only a 10
                      minute drive from the beach. Punchi Doowa has an acre
                      garden for you to enjoy. We offer Sri Lankan meals grown
                      from the garden. A natural plunge pool to refresh in and a
                      sunset/ sunrise deck to relax on. Punchi Doowa is a space
                      to absorb nature and all its offerings.
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700"></p>
                  </div>
                </div>
              </div>

              <hr className="border-b border-gray-300 my-8" />

              <div className="mb-6">
                <div className="font-bold text-2xl  text-left">
                  <AccommodationOffer />
                </div>
              </div>
            </div>
          </div>

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
                <button
                  onClick={() => openModal(true)}
                  className="w-full p-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
                >
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-wrap"></div>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              // onClick={closeModal} // Remove this line to prevent closing when clicking outside
            ></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {/* Add your modal content here */}

                <ReserveForm />
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="submit"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccommodationDetails
