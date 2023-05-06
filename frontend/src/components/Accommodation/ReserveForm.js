import React, { useState } from 'react'
import axios from 'axios'

const ReserveForm = () => {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [Laguagesspeak, setLaguagesspeak] = useState('')
  const [Country, setCountry] = useState('')
  const [StartDate, setStartDate] = useState('')
  const [EndDate, setEndDate] = useState('')
  const [Description, setDescription] = useState('')
  const [NoPassengers, setNoPassengers] = useState('')
  const [HostID, setHostID] = useState('02')

  function sendData(e) {
    e.preventDefault() // to execute only the function "sendData" without submitting data.

    const newReservation = {
      Name,
      Email,
      PhoneNumber,
      Laguagesspeak,
      Country,
      StartDate,
      EndDate,
      Description,
      NoPassengers,
      HostID,
    }

    axios
      .post('http://localhost:4000/api/accommodationReserve', newReservation)
      .then(() => {
        console.log('Success')
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
          onChange={(e) => {
            setName(e.target.value)
          }}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="tel"
          name="phoneNumber"
          onChange={(e) => {
            setPhoneNumber(e.target.value)
          }}
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="String"
          name="laguagesspeak"
          onChange={(e) => {
            setLaguagesspeak(e.target.value)
          }}
          placeholder="Languages Speakable"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="String"
          name="country"
          onChange={(e) => {
            setCountry(e.target.value)
          }}
          placeholder="Country"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <div className="flex space-x-4">
          <input
            type="date"
            name="startDate"
            onChange={(e) => {
              setStartDate(e.target.value)
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="date"
            name="endDate"
            onChange={(e) => {
              setEndDate(e.target.value)
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
          onChange={(e) => {
            setNoPassengers(e.target.value)
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
