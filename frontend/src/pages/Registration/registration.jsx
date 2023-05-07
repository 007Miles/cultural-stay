import React, { useState } from 'react'
import backgroundImage from '../../Assets/bgImg.jpg'

const Registration = () => {
  // ...existing state variables...
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [languages, setLanguages] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Add your form validation logic here, for example:
    if (
      !name ||
      !email ||
      !address ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      setError('All fields are required')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (phone.length < 9) {
      setError('Phone number should contain at least 9 digits')
      return
    }
    // Add your API call to submit the form data here, for example:
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          address,
          phone,
          languages,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      console.log(data)
      // Redirect the user to the login page or do something else here
    } catch (err) {
      console.error(err)
      setError('An error occurred, please try again later')
    }
  }

  return (
    // <div className="flex justify-center items-center h-screen bg-gray-100">
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
          className="w-11/12 md:w-1/2 bg-white rounded-2xl shadow-lg p-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-600">
            Registration
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
          <div className="mb-4 mt-6">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-4 mt-10">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4 mt-10">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div className="mb-4 mt-10">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="mb-4 mt-10">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="languages"
            >
              Languages
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="languages"
              type="text"
              placeholder="Enter languages (comma separated)"
              value={languages}
              onChange={(event) => setLanguages(event.target.value)}
            />
          </div>
          <div className="mb-4 mt-10">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="mb-4 mt-10">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <div className="flex items-center justify-center py-10">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration
