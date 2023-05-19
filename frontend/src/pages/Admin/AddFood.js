import React, { useState } from 'react'
import './form.css'
import axios from 'axios'

const foodUrl = 'http://localhost:4000/api/food'

const AddFood = () => {
  const [name, setName] = useState('')
  const [sinhala_name, setSinhala_name] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [ingrediants, setIngrediants] = useState([])
  const [method, setMethod] = useState([])
  const [restaurants, setRestaurants] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(image)

    const formData = new FormData()
    formData.append('name', name)
    formData.append('sinhala_name', sinhala_name)
    formData.append('description', description)
    formData.append('image', image)
    formData.append('ingingrediants', ingrediants)
    formData.append('method', method)
    formData.append('restaurants', restaurants)
    try {
      const resp = await axios.post(
        foodUrl,
        formData,
        // {
        //   product_name: product_name,
        //   manufacturer: manufacturer,
        //   price: price,
        //   package_quantity: package_quantity,
        //   shipping_weight: shipping_weight,
        //   category: category,
        //   mfd: mfd,
        //   exp: exp,
        //   image: image,
        //   description: description,
        // },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      alert('Food Item Added Successfully')
      console.log(resp.data)
    } catch (error) {
      alert('Sorry! Food Item Creation Failed...')
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
        <h2>Add New Food Item</h2>
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
                      <label htmlFor="name">Food Item Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Food Item Name"
                        required
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
                        placeholder="Enter Food Item Name in Sinhala"
                        required
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
                        placeholder="Upload the Food Image"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="ingrediants">Food Item Ingredients</label>
                      <input
                        type="text"
                        name="ingr1"
                        id="ingr1"
                        value={ingrediants[0] || ''}
                        onChange={(e) => {
                          const newIngrediants = [...ingrediants]
                          newIngrediants[0] = e.target.value
                          setIngrediants(newIngrediants)
                        }}
                        placeholder="Enter Food Item Ingredient 1"
                        required
                      ></input>

                      <input
                        type="text"
                        name="ingr2"
                        id="ingr2"
                        value={ingrediants[1] || ''}
                        onChange={(e) => {
                          const newIngrediants = [...ingrediants]
                          newIngrediants[1] = e.target.value
                          setIngrediants(newIngrediants)
                        }}
                        placeholder="Enter Food Item Ingredient 2"
                      ></input>

                      <input
                        type="text"
                        name="ingr3"
                        id="ingr3"
                        value={ingrediants[2] || ''}
                        onChange={(e) => {
                          const newIngrediants = [...ingrediants]
                          newIngrediants[2] = e.target.value
                          setIngrediants(newIngrediants)
                        }}
                        placeholder="Enter Food Item Ingredient 3"
                      ></input>

                      <input
                        type="text"
                        name="ingr4"
                        id="ingr4"
                        value={ingrediants[3] || ''}
                        onChange={(e) => {
                          const newIngrediants = [...ingrediants]
                          newIngrediants[3] = e.target.value
                          setIngrediants(newIngrediants)
                        }}
                        placeholder="Enter Food Item Ingredient 4"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="method">Food Item Cooking Method</label>
                      <input
                        type="text"
                        name="method1"
                        id="method1"
                        value={method[0] || ''}
                        onChange={(e) => {
                          const newMethod = [...method]
                          newMethod[0] = e.target.value
                          setMethod(newMethod)
                        }}
                        placeholder="Enter Food Item Method 1"
                        required
                      ></input>
                      <input
                        type="text"
                        name="method2"
                        id="method2"
                        value={method[1] || ''}
                        onChange={(e) => {
                          const newMethod = [...method]
                          newMethod[1] = e.target.value
                          setMethod(newMethod)
                        }}
                        placeholder="Enter Food Item Method 2"
                      ></input>
                      <input
                        type="text"
                        name="method3"
                        id="method3"
                        value={method[2] || ''}
                        onChange={(e) => {
                          const newMethod = [...method]
                          newMethod[2] = e.target.value
                          setMethod(newMethod)
                        }}
                        placeholder="Enter Food Item Method 3"
                      ></input>
                      <input
                        type="text"
                        name="method4"
                        id="method4"
                        value={method[3] || ''}
                        onChange={(e) => {
                          const newMethod = [...method]
                          newMethod[3] = e.target.value
                          setMethod(newMethod)
                        }}
                        placeholder="Enter Food Item Method 4"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="restaurants">Available Restaurants</label>
                      <input
                        type="text"
                        name="res1"
                        id="res1"
                        value={restaurants[0] || ''}
                        onChange={(e) => {
                          const newRes = [...method]
                          newRes[0] = e.target.value
                          setRestaurants(newRes)
                        }}
                        placeholder="Enter Available Restaurant 1"
                        required
                      ></input>
                      <input
                        type="text"
                        name="res2"
                        id="res2"
                        value={restaurants[1] || ''}
                        onChange={(e) => {
                          const newRes = [...method]
                          newRes[1] = e.target.value
                          setRestaurants(newRes)
                        }}
                        placeholder="Enter Available Restaurant 2"
                      ></input>
                      <input
                        type="text"
                        name="res3"
                        id="res3"
                        value={restaurants[2] || ''}
                        onChange={(e) => {
                          const newRes = [...method]
                          newRes[2] = e.target.value
                          setRestaurants(newRes)
                        }}
                        placeholder="Enter Available Restaurant 3"
                      ></input>
                      <input
                        type="text"
                        name="res4"
                        id="res4"
                        value={restaurants[3] || ''}
                        onChange={(e) => {
                          const newRes = [...method]
                          newRes[3] = e.target.value
                          setRestaurants(newRes)
                        }}
                        placeholder="Enter Available Restaurant 4"
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

export default AddFood
