import React, { useState } from 'react'

const AccommodationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    area: '',
    location_maplink: '',
    availability: true,
    availability_from: '',
    availability_to: '',
    no_of_guests_welcome: 1,
    no_of_bedrooms: 1,
    no_of_beds: 1,
    no_of_washrooms: 1,
    price_per_night: 0,
    welcome_type: 'Couple',
    category: '',
    description: '',
    facilities: '',
    image: '',
    image_02: '',
    image_03: '',
    image_04: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-semibold mb-4 uppercase">
          Add New Accommodation
        </h2>
        {/* Form fields */}
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Accommodation Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            name="address"
            type="text"
            placeholder="Accommodation Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="area"
            name="area"
            type="text"
            placeholder="Province"
            value={formData.area}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location_maplink"
            name="location_maplink"
            type="text"
            placeholder="Google Map Location Link"
            value={formData.location_maplink}
            onChange={handleChange}
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
            value={formData.description}
            onChange={handleChange}
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
            value={formData.facilities}
            onChange={handleChange}
          ></textarea>
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
  )
}

export default AccommodationForm
