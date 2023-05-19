import React, { useState } from 'react'
import './form.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// const foodUrl = 'http://localhost:4000/api/food/'
const foodUrl = 'https://cultural-stay.onrender.com/api/food'

const UpdateFood = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [sinhala_name, setSinhala_name] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [restaurants, setRestaurants] = useState('')

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', name)
    formData.append('sinhala_name', sinhala_name)
    formData.append('description', description)
    formData.append('image', image)
    formData.append('restaurants', restaurants)

    try {
      const resp = await axios.patch(
        `${foodUrl}/${id}`,
        formData,
        // {
        //   name: name,
        //   sinhala_name: sinhala_name,
        //   image: image,
        //   description: description,
        //   restaurants: restaurants,
        // },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      alert('Food Item Updated Successfully')
      console.log(resp.data)
    } catch (error) {
      alert('Sorry! Food Item Updation Failed...')
      console.log(error.response)
    }
  }

  function generateFileName(originalName) {
    const timestamp = new Date().getTime()
    const extension = originalName.split('.').pop()
    return `${timestamp}.${extension}`
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  return (
    <div>
      <div className="title">
        <h2>Update Food Item</h2>
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
                      <label htmlFor="name">Food Item Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Update Food Item Name"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="sinhala_name">
                        Food Item Sinhala Name
                      </label>
                      <input
                        type="text"
                        name="sinhala_name"
                        id="sinhala_name"
                        value={sinhala_name}
                        onChange={(e) => setSinhala_name(e.target.value)}
                        placeholder="Update Food Item Name in Sinhala"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="image">Food Item Image</label>
                      <input
                        type="file"
                        accept="image/png, image/jpg, image/jpeg"
                        name="image"
                        id="image"
                        onChange={handleImageChange}
                        placeholder="Upload Upto 4 Images"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="restaurants">Available Restaurants</label>
                      <input
                        type="text"
                        name="restaurants"
                        id="restaurants"
                        value={restaurants}
                        onChange={(e) => setRestaurants(e.target.value)}
                        placeholder="Enter New Available Restaurant"
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
                        placeholder="Update Food Item Description"
                      ></textarea>
                    </div>

                    <button
                      class="m-auto bg-green-500 mt-[20px] hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"
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

export default UpdateFood
