import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import AccommodationOffer from '../../components/Accommodation/AccommodationOffer.js'
import ReserveForm from '../../components/Accommodation/ReserveForm.js'
import { FaKey } from 'react-icons/fa'
import Feedback from '../../components/FeedBack and Review/Feedback.js'
import RatingBox from '../../components/FeedBack and Review/RatingBox.js'
import CommentBox from '../../components/FeedBack and Review/CommentBox.js'
import ratingLayout from '../../components/FeedBack and Review/ratingLayout.js'
import useAuth from '../../hooks/useAuth.js'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const amenitiesData = [
  { name: 'Kitchen', icon: '🍴' },
  { name: 'Wifi', icon: '📶' },
  { name: 'Free parking', icon: '🅿️' },
  { name: 'Cooking classes', icon: '❄️' },
]

const AmenityItem = ({ name, icon }) => (
  <div className="flex items-center space-x-2">
    <span className="text-2xl">{icon}</span>
    <span className="font-bold text-base  text-left mt-4">{name}</span>
  </div>
)

const AccommodationDetails = () => {
  const [accommodation, setAccommodation] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { auth } = useAuth()

  const location = useLocation()
  console.log(location) //testing for function in console getting ID
  const id = location.pathname.split('/')[2]
  console.log(id) //testing for function in console and splitting ID

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    // Fetch accommodation details from the API
    fetch(`http://localhost:4000/api/accommodation/byid/${id}`)
      .then((response) => response.json())
      .then((data) => setAccommodation(data.accommodation))
      .catch((error) => console.error(error))
  }, [accommodation])

  if (!accommodation) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className=" mx-64 my-14">
        <div className="mb-6">
          <div className="font-bold text-2xl  text-left">
            {accommodation.name}
          </div>
          <p className="text-sm text-left ">{accommodation.address}</p>
        </div>
        {/* -------------------------------------------------------------------------Images----------------------------------------------------------------------------- */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src={accommodation.images[0]}
              alt="Large Image"
              className="w-full rounded-l-lg mr-4 h-[335px]"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap">
            <div className="w-full md:w-1/2 flex flex-wrap">
              <div className="w-1/2 md:w-full">
                <img
                  src={accommodation.images[1]}
                  alt="Small Image 1"
                  className="w-full mx-2 mb-2"
                />
              </div>
              <div className="w-1/2 md:w-full">
                <img
                  src={accommodation.images[2]}
                  alt="Small Image 2"
                  className="w-full mx-2"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-wrap">
              <div className="w-1/2 md:w-full">
                <img
                  src={accommodation.images[3]}
                  alt="Small Image 3"
                  className="w-full rounded-tr-lg ml-4 mb-2"
                />
              </div>
              <div className="w-1/2 md:w-full">
                <img
                  src={accommodation.images[4]}
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
                Entire house hosted by Hettie
              </div>
              <p className="text-sm text-left ">
                {accommodation.no_of_guests_welcome} guests |{' '}
                {accommodation.no_of_bedrooms} bedroom |{' '}
                {accommodation.no_of_beds} bed | {accommodation.no_of_washrooms}{' '}
                bath
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
                      {accommodation.welcome_type} are wellcome
                    </div>
                    <FaKey className="text-xl text-gray-700 ml-10" />
                    <div className="text-gray-700 font-bold text-lg ml-4">
                      Unique village experience
                    </div>
                  </div>

                  <div className="flex items-center mt-4">
                    <FaKey className="text-xl text-gray-700" />
                    <div className="text-gray-700 font-bold text-lg ml-4">
                      Sharing a cup of tea
                    </div>
                    <FaKey className="text-xl text-gray-700 ml-10" />
                    <div className="text-gray-700 font-bold text-lg ml-4">
                      Countryside on foot or by bicycle
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
                      {accommodation.description}
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
                  <section>
                    <h2 className="text-xl font-semibold mb-4">
                      What this place offers
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {amenitiesData.map((amenity, index) => (
                        <AmenityItem
                          key={index}
                          name={amenity.name}
                          icon={amenity.icon}
                        />
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              <hr className="border-b border-gray-300 my-8" />

              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="rounded-full h-10 w-10 mr-2"
                />
                <h1 className="text-lg font-medium">Hosted by Hettie</h1>
              </div>

              {/* //feedback and review */}
              {/* <div className="mb-6">
                <ratingLayout />
              </div> */}

              <hr className="border-b border-gray-300 my-8" />

              <div className="mb-6">
                <div className="font-bold text-2xl  text-left">
                  <Feedback id={'6456bd46925829cfd2eebb02'} />
                </div>
              </div>

              <hr className="border-b border-gray-300 my-8" />
              {auth?.user ? (
                <div className="mb-6">
                  <div className="font-bold text-2xl  text-left">
                    <CommentBox id={'6456bd46925829cfd2eebb02'} />
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-wrap">
            <div className="max-w-sm md:max-w-sm rounded-xl overflow-hidden shadow-xl bg-white h-[320px] w-[350px] mr-0 ml-16 ">
              <div className="px-6 py-2">
                <div className="font-bold text-xl  text-left mt-4 mb-5">
                  Rs.{accommodation.price_per_night}.00/night
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
                            {new Date(accommodation.availability_from)
                              .toISOString()
                              .substring(0, 10)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap">
                          <div className="text-xs leading-5 text-gray-900">
                            {new Date(accommodation.availability_to)
                              .toISOString()
                              .substring(0, 10)}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 text-sm text-left">
                  <span>Status : </span>
                  <span
                    className={`inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-semibold text-white ${
                      accommodation.availability === 'Available'
                        ? 'bg-green-500'
                        : 'bg-red-500 '
                    }`}
                  >
                    {accommodation.availability}
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
            <div className="mt-4">
              {auth?.user ? (
                <RatingBox id={'6456bd46925829cfd2eebb02'} />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-wrap"></div>
      </div>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
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
