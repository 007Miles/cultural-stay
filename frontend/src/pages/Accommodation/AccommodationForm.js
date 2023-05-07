import React, { useState } from 'react'
import axios from 'axios'

const AccommodationForm = () => {
  const [Name, setName] = useState('')
  const [Address, setAddress] = useState('')
  const [Province, setProvince] = useState('')
  const [Googlelink, setGooglelink] = useState('')
  const [AvailabilityFrom, setAvailabilityFrom] = useState('')
  const [AvailabilityTo, setAvailabilityTo] = useState('')
  const [Guests, setGuests] = useState('')
  const [Bedrooms, setBedrooms] = useState('')
  const [Beds, setBeds] = useState('')
  const [Washrooms, setWashrooms] = useState('')
  const [Price, setPrice] = useState('')
  const [WelcomeType, setWelcomeType] = useState('')
  const [Description, setDescription] = useState('')
  const [Facilities, setFacilities] = useState('')

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Add your form validation logic here, for example:
    if (
      !Name ||
      !Address ||
      !Province ||
      !Googlelink ||
      !AvailabilityFrom ||
      !AvailabilityTo
    ) {
      setError('All fields are required')
      return
    }

    // Add your API call to submit the form data here, for example:
    try {
      const response = await axios.post(
        'http://localhost:4000/api/accommodation',
        {
          Name,
          Address,
          Province,
          Googlelink,
          AvailabilityFrom,
          AvailabilityTo,
          Guests,
          Bedrooms,
          Beds,
          Washrooms,
          Price,
          WelcomeType,
          Description,
          Facilities,
        }
      )
      console.log(response.data)
      // Redirect the user to the login page or do something else here
    } catch (err) {
      console.error(err)
      setError('An error occurred, please try again later')
    }
  }

  // const handleImageChange = (e) => {
  //   const files = e.target.files
  //   let images = []
  //   for (let i = 0; i < files.length; i++) {
  //     images.push(files[i])
  //   }
  //   setFormData({ ...formData, images })
  // }

  return (
    <div className="relative min-h-screen">
      <div
        className="flex justify-center items-center h-full bg-cover bg-fixed absolute inset-0"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/itp03/image/upload/v1683446580/afAccommodation/10th-of-August-2019culture-1024x375_ag765x.jpg)`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }}
      >
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
                value={Name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                name="address"
                type="text"
                placeholder="Accommodation Address"
                value={Address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="area"
                name="area"
                type="text"
                placeholder="Province"
                value={Province}
                onChange={(event) => setProvince(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location_maplink"
                name="location_maplink"
                type="text"
                placeholder="Google Map Location Link"
                value={Googlelink}
                onChange={(event) => setGooglelink(event.target.value)}
              />
            </div>

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
                type="date"
                value={AvailabilityFrom}
                onChange={(event) => setAvailabilityFrom(event.target.value)}
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
                type="date"
                value={AvailabilityTo}
                onChange={(event) => setAvailabilityTo(event.target.value)}
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
                value={Guests}
                onChange={(event) => setGuests(event.target.value)}
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
                value={Bedrooms}
                onChange={(event) => setBedrooms(event.target.value)}
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
                value={Beds}
                onChange={(event) => setBeds(event.target.value)}
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
                value={Washrooms}
                onChange={(event) => setWashrooms(event.target.value)}
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
                value={Price}
                onChange={(event) => setPrice(event.target.value)}
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
                value={WelcomeType}
                onChange={(event) => setWelcomeType(event.target.value)}
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
                value={Description}
                onChange={(event) => setDescription(event.target.value)}
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
                value={Facilities}
                onChange={(event) => setFacilities(event.target.value)}
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
                multiple
                accept="image/*"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // onChange={handleImageChange}
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
                type="button"
                class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AccommodationForm
