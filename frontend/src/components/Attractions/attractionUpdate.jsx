import React, { useState } from 'react'
import axios from 'axios'

const TouristAttractionUpdateForm = ({ attraction, onUpdate }) => {
  const [name, setName] = useState(attraction.name)
  const [description, setDescription] = useState(attraction.description)
  const [address, setAddress] = useState(attraction.address)
  const [area, setArea] = useState(attraction.area)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.put(`/api/tourist-attractions/${attraction._id}`, {
        name,
        description,
        address,
        area,
      })
      onUpdate()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      {/* ... form fields for name, description, address, area ... */}
      {/* <button
        className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded"
        type="submit"
      > */}
      <button
        className="inline-block px-6 py-2 border-2 border-blue-500 bg-blue-500 text-white leading-tight uppercase rounded-full hover:blue-900 hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        type="submit"
      >
        Update
      </button>
    </form>
  )
}

export default TouristAttractionUpdateForm
