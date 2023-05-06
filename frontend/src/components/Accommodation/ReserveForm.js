import React, { useState } from 'react'

const ReserveForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    laguagesspeak: '',
    country: '',
    startDate: '',
    endDate: '',
    description: '',
    passengers: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className=" p-6 ">
      <h2 className="text-2xl font-semibold mb-4">Reserve</h2>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="String"
          name="laguagesspeak"
          value={formData.laguagesspeak}
          onChange={handleChange}
          placeholder="Languages Speakable"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="String"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <div className="flex space-x-4">
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <input
          type="String"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="number"
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          placeholder="Number of Passengers"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="w-full p-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ReserveForm
