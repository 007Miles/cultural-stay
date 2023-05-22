import React, { useState } from 'react'
import axios from 'axios'

const ReserveForm = () => {
  const [rp_name, setRp_name] = useState('')
  const [rp_email, setRp_email] = useState('')
  const [rp_phone, setRp_phone] = useState('')
  const [rp_languages, setRp_languages] = useState('')
  const [rp_country, setRp_country] = useState('')
  const [reserve_from, setReserve_from] = useState('')
  const [reserve_to, setReserve_to] = useState('')
  const [description, setDescription] = useState('')
  const [rp_noofPassengers, setRp_noofPassengers] = useState('')
  const [hostId, setHostId] = useState('02')

  const currentDate = new Date().toISOString().split('T')[0]

  function sendData(e) {
    e.preventDefault() // to execute only the function "sendData" without submitting data.

    const newReservation = {
      rp_name,
      rp_email,
      rp_phone,
      rp_languages,
      rp_country,
      reserve_from,
      reserve_to,
      description,
      rp_noofPassengers,
      hostId,
    }

    axios
      // .post('http://localhost:4000/api/accommodationReserve', newReservation)
      .post(
        'https://cultural-stay.onrender.com/api/accommodationReserve',
        newReservation
      )
      .then(() => {
        console.log('Success', newReservation)
        window.alert('Reservation Complete')
        window.location.reload()
        // Reset the form values
        setRp_name('')
        setRp_email('')
        setRp_phone('')
        setRp_languages('')
        setRp_country('')
        setReserve_from('')
        setReserve_to('')
        setDescription('')
        setRp_noofPassengers('')
      })
      .catch((err) => {
        console.log('error')
      })
  }

  return (
    <form onSubmit={sendData} className=" p-6 ">
      <h2 className="text-2xl font-semibold mb-4">Reserve</h2>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          required
          onChange={(e) => {
            setRp_name(e.target.value)
          }}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          required
          onChange={(e) => {
            setRp_email(e.target.value)
          }}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="tel"
          name="phoneNumber"
          required
          onChange={(e) => {
            setRp_phone(e.target.value)
          }}
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="String"
          name="laguagesspeak"
          onChange={(e) => {
            setRp_languages(e.target.value)
          }}
          placeholder="Languages Speakable"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="String"
          name="country"
          onChange={(e) => {
            setRp_country(e.target.value)
          }}
          placeholder="Country"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <div className="flex space-x-4">
          <input
            type="date"
            name="startDate"
            required
            min={currentDate}
            onChange={(e) => {
              setReserve_from(e.target.value)
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="date"
            name="endDate"
            required
            min={reserve_from || currentDate}
            onChange={(e) => {
              setReserve_to(e.target.value)
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <input
          type="String"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="number"
          name="passengers"
          required
          onChange={(e) => {
            setRp_noofPassengers(e.target.value)
          }}
          placeholder="Number of Passengers"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <button
          onSubmit={sendData}
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
