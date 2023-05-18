import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import AccommodationOffer from '../../components/Accommodation/AccommodationOffer.js'
import ReserveForm from '../../components/Accommodation/ReserveForm.js'
import { FaKey } from 'react-icons/fa'
import Feedback from '../../components/FeedBack and Review/Feedback.js'
import RatingBox from '../../components/FeedBack and Review/RatingBox.js'
import CommentBox from '../../components/FeedBack and Review/CommentBox.js'
import ratingLayout from '../../components/FeedBack and Review/ratingLayout.js'
import useAuth from '../../hooks/useAuth.js'

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
  const [showModal, setShowModal] = useState(false)
  const { auth } = useAuth()

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
            Punchi Doowa, Private Mud House Near Kamburugamuwa
          </div>
          <p className="text-sm text-left underline">
            Kamburugamuwa, Southern Province, Sri Lanka
          </p>
        </div>
        {/* -------------------------------------------------------------------------Images----------------------------------------------------------------------------- */}
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/itp03/image/upload/v1683392797/afAccommodation/7d864e7d052952180da8ac4be17856d7_olt66u.jpg"
              alt="Large Image"
              className="w-full rounded-l-lg mr-4 h-[335px]"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap">
            <div className="w-full md:w-1/2 flex flex-wrap">
              <div className="w-1/2 md:w-full">
                <img
                  src="https://res.cloudinary.com/itp03/image/upload/v1683383259/afAccommodation/99edf8eed5f40019f56a42aac21afa51_wdcjng.jpg"
                  alt="Small Image 1"
                  className="w-full mx-2 mb-2"
                />
              </div>
              <div className="w-1/2 md:w-full">
                <img
                  src="https://res.cloudinary.com/itp03/image/upload/v1683392797/afAccommodation/a73072231ca3becad88f0c4271cafaaa_elkici.jpg"
                  alt="Small Image 2"
                  className="w-full mx-2"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-wrap">
              <div className="w-1/2 md:w-full">
                <img
                  src="https://res.cloudinary.com/itp03/image/upload/v1683383259/afAccommodation/99307d2f425003a5f985656c69901189_ao0ol9.jpg"
                  alt="Small Image 3"
                  className="w-full rounded-tr-lg ml-4 mb-2"
                />
              </div>
              <div className="w-1/2 md:w-full">
                <img
                  src="https://res.cloudinary.com/itp03/image/upload/v1683392869/afAccommodation/2de4f2aecb73972ab4f2f3a54c439363_jckoge.jpg"
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
                4 guests | 1 bedroom | 2 bed | 1 bath
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
                      Families are wellcome
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
                      Discover the authentic charm of Sri Lanka with a unique
                      village home stay experience. Immerse yourself in the
                      serene beauty of the countryside, where lush green paddy
                      fields stretch as far as the eye can see, and traditional
                      mud houses stand as proud reminders of the country's rich
                      heritage.
                      <br />
                      <br />
                      During your village home stay, you'll be welcomed with
                      genuine warmth and hospitality by local families who are
                      eager to share their culture, customs, and way of life
                      with you. Wake up to the sound of birdsong and the gentle
                      rustle of palm leaves swaying in the breeze. Savor
                      traditional Sri Lankan dishes made with fresh, organic
                      ingredients sourced directly from the family's own garden
                      or the nearby market.
                      <br />
                      <br />
                      Take part in daily activities such as cooking classes,
                      where you can learn the secrets behind mouthwatering
                      curries, fragrant rice dishes, and flavorful chutneys.
                      Explore the surrounding countryside on foot or by bicycle,
                      taking in the vibrant colors of the landscape and
                      witnessing the age-old techniques used by farmers to
                      cultivate their land.
                      <br />
                      <br />
                      Experience the simple pleasures of village life, such as
                      sharing a cup of tea with the neighbors or joining in a
                      game of cricket with the local children. As the sun sets,
                      gather around a bonfire under a starlit sky to listen to
                      captivating stories passed down through generations or
                      enjoy the enchanting rhythms of traditional Sri Lankan
                      music and dance.
                      <br />
                      <br />A Sri Lankan village home stay is more than just a
                      place to rest your head; it's an opportunity to forge
                      lasting connections with the people and the land, and to
                      leave with a newfound appreciation for the country's rich
                      cultural tapestry.
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
                  Rs.4500.00/night
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
                            2023-10-15
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 text-sm text-left">
                  <span>Status : </span>
                  <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-xs font-semibold text-white">
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
            <div className="mt-4">
              {auth?.user ? <RatingBox /> : <div></div>}
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
