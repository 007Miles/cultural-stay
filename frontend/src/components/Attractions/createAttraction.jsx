import React, { useState } from 'react'
import axios from 'axios'
import backgroundImage from '../../Assets/bgImg.jpg'

const TouristAttractionForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [address, setAddress] = useState('')
  const [images, setImages] = useState([])
  const [area, setArea] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !description || !address || !area) {
      setError('All fields are required')
      return
    }

    try {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('description', description)
      formData.append('address', address)
      formData.append('area', area)

      images.forEach((image) => {
        formData.append('images', image)
      })

      const response = await axios.post(
        'http://localhost:4000/api/TASites/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      console.log(response.data)

      // Add a success message
      setSuccess('Tourist attraction added successfully!')

      setName('')
      setDescription('')
      setAddress('')
      setArea('')
      setImages([])
      setError('')
    } catch (err) {
      console.error(err)
      setError('An error occurred, please try again later')
    }
  }

  const handleImageChange = (e) => {
    setImages([...images, ...e.target.files])
  }

  return (
    <div className="relative min-h-screen">
      <div
        className="flex justify-center items-center h-full bg-cover bg-fixed absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }}
      >
        <form
          className="w-1/2 bg-white rounded-2xl shadow-lg p-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-600">
            Add Tourist Attraction
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
              {success}
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter attraction name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="
description"
              placeholder="Enter attraction description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Enter attraction address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="area"
            >
              Area
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="area"
              type="text"
              placeholder="Enter attraction area"
              value={area}
              onChange={(event) => setArea(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="images"
            >
              Images
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="images"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </div>
          <div className="flex items-center justify-center py-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Attraction
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TouristAttractionForm
