import React, { useState } from 'react'
import axios from 'axios'

const AccommodationForm = () => {
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

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleAvailabilityFromChange = (e) => {
    const selectedDate = e.target.value
    const today = new Date().toISOString().split('T')[0]

    if (selectedDate < today) {
      // Selected date is in the past
      setError('Please select a future date for Availability From')
    } else {
      // Selected date is valid
      setError('')
      setAvailability_from(selectedDate)
    }
  }

  const handleAvailabilityToChange = (e) => {
    const selectedDate = e.target.value
    const today = new Date().toISOString().split('T')[0]

    if (selectedDate < today) {
      // Selected date is in the past
      setError('Please select a future date for Availability To')
    } else {
      // Selected date is valid
      setError('')
      setAvailability_to(selectedDate)
    }
  }

  const currentDate = new Date().toISOString().split('T')[0]

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !description || !address || !area) {
      setError('All fields are required')
      return
    }

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('address', address)
      formData.append('area', area)
      formData.append('availability_from', availability_from)
      formData.append('availability_to', availability_to)
      formData.append('no_of_guests_welcome', no_of_guests_welcome)
      formData.append('no_of_bedrooms', no_of_bedrooms)
      formData.append('no_of_beds', no_of_beds)
      formData.append('no_of_washrooms', no_of_washrooms)
      formData.append('price_per_night', price_per_night)
      formData.append('welcome_type', welcome_type)
      formData.append('description', description)
      formData.append('facilities', facilities)
      formData.append('createdBy', createdBy)

      images.forEach((image) => {
        formData.append('images', image)
      })

      const response = await axios.post(
        // 'http://localhost:4000/api/accommodation',
        'https://fine-teal-ostrich-tam.cyclic.app/api/accommodation',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      console.log(response.data)

      // Add a success message
      setSuccess('Accommodation Added Successfully!')
      window.location.href = '/hostDashboardProfile'

      // setName('')
      // setAddress('')
      // setArea('')
      // setAvailability_from('')
      // setAvailability_to('')
      // setNo_of_guests_welcome('')
      // no_of_bedrooms('')
      // no_of_beds('')
      // no_of_washrooms('')
      // setPrice_per_night('')
      // setWelcome_type('')
      // setDescription('')
      // setFacilities('')
      // createdBy('64525da5476b8cab8b1e6c04')
      // setImages([])

      // setError('')
      // Redirect to the specified page
    } catch (err) {
      console.error(err)
      setError('An error occurred, please try again later')
    }
  }

  // function sendData(e) {
  //   e.preventDefault() // to execute only the function "sendData" without submitting data.

  //   const newAccommodation = {
  //     name,
  //     address,
  //     area,
  //     availability_from,
  //     availability_to,
  //     no_of_guests_welcome,
  //     no_of_bedrooms,
  //     no_of_beds,
  //     no_of_washrooms,
  //     price_per_night,
  //     welcome_type,
  //     description,
  //     facilities,
  //   }

  //   axios
  //     .post('http://localhost:4000/api/accommodation', newAccommodation)
  //     .then(() => {
  //       console.log('Success', newAccommodation)
  //       window.alert('Accommodation Added Successfully')
  //       window.location.reload()
  //     })
  //     .catch((err) => {
  //       console.log('error')
  //     })
  // }

  const handleImageChange = (e) => {
    setImages([...images, ...e.target.files])
  }

  return (
    <div className="w-full max-w-md mx-auto mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-semibold mb-4 uppercase">
          Add New Accommodation
        </h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
            Successfully registered!
          </div>
        )}
        {/* Form fields */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Accommodation Name"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            name="address"
            type="text"
            placeholder="Accommodation Address"
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="area"
            name="area"
            type="text"
            placeholder="Province"
            onChange={(e) => {
              setArea(e.target.value)
            }}
          />
        </div>
        {/* <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location_maplink"
            name="location_maplink"
            type="text"
            placeholder="Google Map Location Link"
            value={Googlelink}
            onChange={(event) => setGooglelink(event.target.value)}
          />
        </div> */}

        {/* Availability From */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="availability_from"
          >
            Location Availability From
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="availability_from"
            name="availability_from"
            min={currentDate}
            type="date"
            onChange={handleAvailabilityFromChange}
            // onChange={(event) => setAvailabilityFrom(event.target.value)}
          />
        </div>

        {/* Availability From */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="availability_from"
          >
            Location Availability To
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="availability_to"
            name="availability_to"
            min={availability_from || currentDate}
            type="date"
            onChange={handleAvailabilityToChange}
          />
        </div>

        {/* no_of_guests_welcome */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="no_of_guests_welcome"
            name="no_of_guests_welcome"
            placeholder="No of guests welcome"
            type="number"
            onChange={(e) => {
              setNo_of_guests_welcome(e.target.value)
            }}
          />
        </div>

        {/* no_of_bedrooms */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="no_of_bedrooms"
            name="no_of_bedrooms"
            placeholder="No of Bedrooms"
            type="number"
            onChange={(e) => {
              setNo_of_bedrooms(e.target.value)
            }}
          />
        </div>

        {/* no_of_beds */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="no_of_beds"
            name="no_of_beds"
            placeholder="No of Beds"
            type="number"
            onChange={(e) => {
              setNo_of_beds(e.target.value)
            }}
          />
        </div>

        {/* no_of_washrooms */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="no_of_washrooms"
            name="no_of_washrooms"
            placeholder="No of Washrooms"
            type="number"
            onChange={(e) => {
              setNo_of_washrooms(e.target.value)
            }}
          />
        </div>

        {/* price_per_night */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price_per_night"
            name="price_per_night"
            placeholder="Price per Night"
            type="number"
            onChange={(e) => {
              setPrice_per_night(e.target.value)
            }}
          />
        </div>

        {/* welcome_type */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="welcome_type"
            name="welcome_type"
            placeholder="Welcome Parties"
            type="String"
            onChange={(e) => {
              setWelcome_type(e.target.value)
            }}
          />
        </div>

        {/* description */}
        <div className="mb-4">
          <textarea
            id="description"
            name="description"
            rows="3"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter a description"
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          ></textarea>
        </div>

        {/* facilities */}
        <div className="mb-4">
          <textarea
            id="facilities"
            name="facilities"
            rows="3"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Facilities Provide"
            onChange={(e) => {
              setFacilities(e.target.value)
            }}
          ></textarea>
        </div>

        {/* Image uploader */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="images"
          >
            Upload Images
          </label>
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

        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Submit
          </button>
          <button
            type="back"
            name="back"
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  )
}

export default AccommodationForm
