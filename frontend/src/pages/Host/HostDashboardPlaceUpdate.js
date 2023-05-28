import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HostDashboardPlaceUpdate = () => {
  const [accommodation, setAccommodation] = useState(null)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [area, setArea] = useState('')
  const [availability_from, setAvailability_from] = useState('')
  const [availability_to, setAvailability_to] = useState('')
  const [no_of_guests_welcome, setNo_of_guests_welcome] = useState('')
  const [no_of_bedrooms, setNo_of_bedrooms] = useState('')
  const [no_of_beds, setNo_of_beds] = useState('')
  const [no_of_washrooms, setNo_of_washrooms] = useState('')
  const [price_per_night, setPrice_per_night] = useState('')
  const [welcome_type, setWelcome_type] = useState('')
  const [description, setDescription] = useState('')
  const [facilities, setFacilities] = useState('')
  const [createdBy, setCreatedBy] = useState('64525da5476b8cab8b1e6c04')
  const [images, setImages] = useState([])

  const hostId = '6457ab81e8c48e0e8863313d'

  // useEffect(() => {
  //   const fetchAccommodationData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:4000/api/accommodation/${hostId}`
  //       )
  //       console.log('Host data received:', response.data.accommodation)
  //       setAccommodationData(response.data.accommodation)
  //     } catch (error) {
  //       console.error('Error fetching accommodation data:', error)
  //     }
  //   }

  //   fetchAccommodationData()
  // }, [])

  // if (!accommodationData) {
  //   return <div>Loading...</div>
  // }

  // useEffect(() => {
  //   // Fetch accommodation details from the API
  //   fetch(`http://localhost:4000/api/accommodation/${hostId}`)
  //     .then((response) => response.json())
  //     .then((data) => setAccommodation(data.accommodation))
  //   console.log(data.accommodation).catch((error) => console.error(error))
  // }, [accommodation])

  // useEffect(() => {
  //   function fetchData() {
  //     axios
  //       .get(`http://localhost:4000/api/accommodation/${hostId}`)
  //       .then((res) => {
  //         console.log('your data has been received')
  //         console.log(res.data.accommodation)

  //         setAccommodation(res.data.accommodation) //using set function to retrieve data and display on website
  //         console.log(res.data.accommodation.address)
  //       })
  //       .catch((err) => {
  //         alert(err.message)
  //       })
  //   }
  //   fetchData()
  // }, [accommodation])

  // if (!accommodation) {
  //   return <div>Loading...</div>
  // }

  React.useEffect(() => {
    async function getAccommodation() {
      try {
        const response = await fetch(
          // `http://localhost:4000/api/accommodation/${hostId}`
          `https://fine-teal-ostrich-tam.cyclic.app/api/accommodation/${hostId}`
        )

        const data = await response.json()

        console.log(data.accommodation)

        if (data.accommodation) {
          const {
            name: name,
            address: address,
            area: area,
            availability_from: availability_from,
            availability_to: availability_to,
            no_of_guests_welcome: no_of_guests_welcome,
            no_of_bedrooms: no_of_bedrooms,
            no_of_beds: no_of_beds,
            no_of_washrooms: no_of_washrooms,
            price_per_night: price_per_night,
            welcome_type: welcome_type,
            description: description,
            facilities: facilities,
            images: images,
          } = data.accommodation

          const newAccommodation = {
            name,
            address,
            area,
            availability_from,
            availability_to,
            no_of_guests_welcome,
            no_of_bedrooms,
            no_of_beds,
            no_of_washrooms,
            price_per_night,
            welcome_type,
            description,
            facilities,
            images,
          }

          setAccommodation(newAccommodation)
        } else {
          setAccommodation(null)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getAccommodation()
  }, [hostId])

  if (!accommodation) {
    return <h2>No accommodation item to display</h2>
  }

  // const {
  //   name,
  //   address,
  //   area,
  //   availability_from,
  //   availability_to,
  //   no_of_guests_welcome,
  //   no_of_bedrooms,
  //   no_of_beds,
  //   no_of_washrooms,
  //   price_per_night,
  //   welcome_type,
  //   description,
  //   facilities,
  //   images,
  // } = accommodation

  const handleImageChange = (e) => {
    setImages([...images, ...e.target.files])
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
                        value={
                          'Punchi Doowa, Private Mud House Near Kamburugamuwa'
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => {
                          setName(e.target.value)
                        }}
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
                        onChange={(e) => {
                          setAddress(e.target.value)
                        }}
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
                        onChange={(e) => {
                          setArea(e.target.value)
                        }}
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
                        onChange={(e) => {
                          setNo_of_guests_welcome(e.target.value)
                        }}
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
                        onChange={(e) => {
                          setNo_of_bedrooms(e.target.value)
                        }}
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
                        onChange={(e) => {
                          setNo_of_beds(e.target.value)
                        }}
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
                        onChange={(e) => {
                          setNo_of_washrooms(e.target.value)
                        }}
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
                        onChange={(e) => {
                          setPrice_per_night(e.target.value)
                        }}
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
                        onChange={(e) => {
                          setWelcome_type(e.target.value)
                        }}
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
                        onChange={(e) => {
                          setDescription(e.target.value)
                        }}
                      ></textarea>
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        Facilities
                      </dt>
                      <textarea
                        type="string"
                        value={'Wi-Fi,Cooking classes,Free parking,Kitchen'}
                        className="w-full p-2 border border-gray-300 rounded"
                        onChange={(e) => {
                          setFacilities(e.target.value)
                        }}
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
                        crossOrigin="annonymous"
                        multiple
                        accept="image/*"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleImageChange}
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
