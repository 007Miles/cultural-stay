import React, { useState } from 'react'
import './form.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// const resUrl = 'http://localhost:4000/api/restaurants/'
const resUrl = 'https://cultural-stay.onrender.com/api/restaurants/'

const UpdateRestaurant = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState([])
  const [phone, setPhone] = useState('')
  const [website, setWebsite] = useState('')
  const [food, setFood] = useState([])

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    // formData.append('image', image)
    formData.append('phone', phone)
    formData.append('website', website)
    formData.append('food', food)

    image.forEach((image) => {
      formData.append('image', image)
    })

    try {
      const resp = await axios.patch(
        `${resUrl}/${id}`,
        formData,
        // {
        //   name: name,
        //   image: image,
        //   description: description,
        //   phone: phone,
        //   website: website,
        //   food: food,
        // },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      alert('Restaurant Updated Successfully')
      console.log(resp.data)
    } catch (error) {
      alert('Sorry! Restaurant Updation Failed...')
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
        <h2>Update Restaurant</h2>
        <div className="underline"></div>
      </div>
      <div className="main-form">
        <div className="form-body">
          <div className="form-container">
            <form onSubmit={handleUpdateSubmit}>
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
                        placeholder="Update Restaurant Name"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="phone">Restaurant Contact Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Update Contact Number"
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
                        placeholder="Update Restaurant Website"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="image">Restaurant Image</label>
                      <input
                        type="file"
                        accept="image/png, image/jpg, image/jpeg"
                        name="image"
                        multiple
                        id="image"
                        onChange={handleImageChange}
                        placeholder="Upload Upto 4 Images"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="food">Main Food Items</label>
                      <input
                        type="text"
                        name="food"
                        id="food"
                        value={food}
                        onChange={(e) => setFood(e.target.value)}
                        placeholder="Enter New Main Food Item"
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

export default UpdateRestaurant
