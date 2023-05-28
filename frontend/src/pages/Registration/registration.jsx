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
  const [role, setRole] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email || !address || !phone) {
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

    if (role === 'host') {
      try {
        const response = await fetch('https://fine-teal-ostrich-tam.cyclic.app/api/hostLocal', {
          method: 'POST',
          body: JSON.stringify({
            name,
            email,
            address,
            phone,
            languages,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const data = await response.json()
        console.log(data)

        try {
          const response = await fetch(
            'https://fine-teal-ostrich-tam.cyclic.app/api/user/signIn',
            {
              method: 'POST',
              body: JSON.stringify({
                username: name,
                user_email: email,
                role,
                password,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          const data = await response.json()
          console.log(data)
          window.location.href = '/accommodationForm'
        } catch (err) {
          console.error(err)
          setError('An error occurred, please try again later')
        }
      } catch (err) {
        console.error(err)
        setError('An error occurred, please try again later')
      }
      // window.location.href = '/accommodationForm'
    } else if (role === 'tourist') {
      try {
        const response = await fetch('https://fine-teal-ostrich-tam.cyclic.app/api/user/signIn', {
          method: 'POST',
          body: JSON.stringify({
            username: name,
            user_email: email,
            role,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const data = await response.json()
        console.log(data)
        window.location.href = '/login'
      } catch (err) {
        console.error(err)
        setError('An error occurred, please try again later')
      }
      //window.location.href = '/login'
    }
  }

  return (
    <div className="flex justify-center items-center bg-gray-100">
      {/* <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
      }}
    > */}
      <div className="w-full max-w-md mx-auto mt-20">
        <form
          className=" bg-white rounded-2xl shadow-lg p-8"
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
              User Name
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
              htmlFor="role"
            >
              Role
            </label>
            <select
              className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="">Select role</option>
              <option value="tourist">Tourist</option>
              <option value="host">Host</option>
            </select>
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
