import React, { useState } from 'react'
import './form.css'
import axios from 'axios'

// const resUrl = 'http://localhost:4000/api/restaurants'
// const resUrl = 'https://cultural-stay.onrender.com/api/restaurants'
const resUrl = 'https://fine-teal-ostrich-tam.cyclic.app/api/restaurants'

const AddRestaurant = () => {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState([])
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [area, setArea] = useState('')
  const [food, setFood] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(image)

    const formData = new FormData()
    formData.append('name', name)
    formData.append('city', city)
    formData.append('description', description)
    // formData.append('image', image)
    formData.append('address', address)
    formData.append('phone', phone)
    formData.append('website', website)
    formData.append('area', area)
    formData.append('food', food)

    image.forEach((image) => {
      formData.append('image', image)
    })

    try {
      const resp = await axios.post(resUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      alert('Restaurant Added Successfully')
      console.log(resp.data)
    } catch (error) {
      alert('Sorry! Restaurant Creation Failed...')
      console.log(error.response)
    }
  }

  function generateFileName(originalName) {
    const timestamp = new Date().getTime()
    const extension = originalName.split('.').pop()
    return `${timestamp}.${extension}`
  }

  const handleImageChange = (e) => {
    setImage([...image, ...e.target.files])
  }

  return (
    <div>
      <div className="title">
        <h2>Add New Restaurant</h2>
        <div className="underline"></div>
      </div>
      <div className="main-form">
        <div className="form-body">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form first">
                <div className="details-personal">
                  <div className="fields">
                    <div className="input-field">
                      <label htmlFor="name">Restaurant Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Restaurant Name"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="city">City of the Restaurant</label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter Main City of the Restaurant"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="address">Restaurant Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Restaurant Address"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="phone">Restaurant Contact Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter Contact Number"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="website">Restaurant Website</label>
                      <input
                        type="url"
                        name="website"
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Enter Restaurant Website"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="image">Restaurant Image</label>
                      <input
                        type="file"
                        accept="image/png, image/jpg, image/jpeg"
                        multiple
                        name="image"
                        id="image"
                        onChange={handleImageChange}
                        placeholder="Upload Upto 4 Images"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="area">Province of the Restaurant</label>
                      <select
                        name="area"
                        id="area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                      >
                        <option
                          class="text-gray-400"
                          value=""
                          defaultValue={'Choose a Category'}
                        >
                          Choose a Province
                        </option>
                        <option value="Western">Western</option>
                        <option value="Northern">Northern</option>
                        <option value="North Central">North Central</option>
                        <option value="North Western">North Western</option>
                        <option value="Central">Central</option>
                        <option value="Eastern">Eastern</option>
                        <option value="Uva">Uva</option>
                        <option value="Sabaragamuwa">Sabaragamuwa</option>
                        <option value="Southern">Southern</option>
                      </select>
                    </div>

                    <div className="input-field">
                      <label htmlFor="food1">Main Food Items</label>
                      <input
                        type="text"
                        name="food1"
                        id="food1"
                        value={food[0] || ''}
                        onChange={(e) => {
                          const newfood = [...food]
                          newfood[0] = e.target.value
                          setFood(newfood)
                        }}
                        placeholder="Enter Main Food Items"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="food2">Main Food Items</label>
                      <input
                        type="text"
                        name="food2"
                        id="food2"
                        value={food[1] || ''}
                        onChange={(e) => {
                          const newfood = [...food]
                          newfood[1] = e.target.value
                          setFood(newfood)
                        }}
                        placeholder="Enter Main Food Items"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="food3">Main Food Items</label>
                      <input
                        type="text"
                        name="food3"
                        id="food3"
                        value={food[2] || ''}
                        onChange={(e) => {
                          const newfood = [...food]
                          newfood[2] = e.target.value
                          setFood(newfood)
                        }}
                        placeholder="Enter Main Food Items"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="food4">Main Food Items</label>
                      <input
                        type="text"
                        name="food4"
                        id="food4"
                        value={food[3] || ''}
                        onChange={(e) => {
                          const newfood = [...food]
                          newfood[3] = e.target.value
                          setFood(newfood)
                        }}
                        placeholder="Enter Main Food Items"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="food5">Main Food Items</label>
                      <input
                        type="text"
                        name="food5"
                        id="food5"
                        value={food[4] || ''}
                        onChange={(e) => {
                          const newfood = [...food]
                          newfood[4] = e.target.value
                          setFood(newfood)
                        }}
                        placeholder="Enter Main Food Items"
                      ></input>
                    </div>

                    <div className="input-field-desc">
                      <label htmlFor="description">Food Item Description</label>
                      <div></div>
                      <textarea
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Food Item Description"
                        required
                      ></textarea>
                    </div>

                    <button
                      class="m-auto bg-[#0092FB] mt-[20px] hover:bg-blue-500 text-white font-bold py-2 px-4 border border-green-700 rounded"
                      type="submit"
                      name="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddRestaurant
