import React, { useState } from 'react'
import './form.css'
// import axios from 'axios'
// import Navbar from '../../components/navbar'

// const productUrl = 'http://localhost:3008/api/v1/products'

const UpdateRestaurant = () => {
  //   const [product_name, setProduct_name] = useState('')
  //   const [manufacturer, setManufacturer] = useState('')
  //   const [price, setPrice] = useState('')
  //   const [package_quantity, setPackage_quantity] = useState('')
  //   const [shipping_weight, setShipping_weight] = useState('')
  //   const [category, setCategory] = useState('')
  //   const [mfd, setMfd] = useState('')
  //   const [exp, setExp] = useState('')
  //   const [image, setImage] = useState('')
  //   const [description, setDescription] = useState('')

  //   const handleSubmit = async (e) => {
  //     e.preventDefault()
  //     console.log(image)

  //     const formData = new FormData()
  //     formData.append('product_name', product_name)
  //     formData.append('manufacturer', manufacturer)
  //     formData.append('price', price)
  //     formData.append('package_quantity', package_quantity)
  //     formData.append('shipping_weight', shipping_weight)
  //     formData.append('category', category)
  //     formData.append('mfd', mfd)
  //     formData.append('exp', exp)
  //     formData.append('description', description)
  //     formData.append('image', image)
  //     try {
  //       const resp = await axios.post(
  //         productUrl,
  //         formData,
  //         // {
  //         //   product_name: product_name,
  //         //   manufacturer: manufacturer,
  //         //   price: price,
  //         //   package_quantity: package_quantity,
  //         //   shipping_weight: shipping_weight,
  //         //   category: category,
  //         //   mfd: mfd,
  //         //   exp: exp,
  //         //   image: image,
  //         //   description: description,
  //         // },
  //         {
  //           headers: {
  //             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDM5OWRmNDBmMDhjYjYyNjg5MmQ3ZGQiLCJuYW1lIjoiIiwiaWF0IjoxNjgyODY3Mzg4LCJleHAiOjE2ODU0NTkzODh9.oAAzQNJhV9Oh32BV_hiU1zFoxYlBpa_4W2qJSSotTdw`,
  //             'Content-Type': 'multipart/form-data',
  //           },
  //         }
  //       )
  //       alert('Product Added Successfully')
  //       console.log(resp.data)
  //     } catch (error) {
  //       alert('Sorry! Product Creation Failed...')
  //       console.log(error.response)
  //     }
  //   }

  function generateFileName(originalName) {
    const timestamp = new Date().getTime()
    const extension = originalName.split('.').pop()
    return `${timestamp}.${extension}`
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
            <form>
              <div className="form first">
                <div className="details-personal">
                  <div className="fields">
                    <div className="input-field">
                      <label htmlFor="product_name">Restaurant Name</label>
                      <input
                        type="text"
                        name="product_name"
                        id="product_name"
                        // value={product_name}
                        // onChange={(e) => setProduct_name(e.target.value)}
                        placeholder="Enter Restaurant Name"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">
                        City of the Restaurant
                      </label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Main City of the Restaurant"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">Restaurant Address</label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Restaurant Address"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">
                        Restaurant Contact Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Contact Number"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">Restaurant Website</label>
                      <input
                        type="url"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Restaurant Website"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="image">Restaurant Image</label>
                      <input
                        type="file"
                        accept="image/png, image/jpg, image/jpeg"
                        name="image"
                        id="image"
                        // value={image}
                        // onChange={(e) => setImage(e.target.value)}
                        placeholder="Upload Upto 4 Images"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="category">
                        Province of the Restaurant
                      </label>
                      <select
                        name="category"
                        id="category"
                        // value={category}
                        // onChange={(e) => setCategory(e.target.value)}
                        required
                      >
                        <option value="Supplements & Herbs">Western</option>
                        <option value="Sports Nutrition">Northern</option>
                        <option value="Beauty">North Central</option>
                        <option value="Bath & Personal Care">
                          North Western
                        </option>
                        <option value="Grocery">Central</option>
                        <option value="Home">Eastern</option>
                        <option value="Pets">Uva</option>
                        <option value="Babies & Kids">Sabaragamuwa</option>
                        <option value="Pets">Southern</option>
                      </select>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">Main Food Items</label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Main Food Items"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">Main Food Items</label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Main Food Items"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">Main Food Items</label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Main Food Items"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">Main Food Items</label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Main Food Items"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">Main Food Items</label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Main Food Items"
                        required
                      ></input>
                    </div>

                    <div className="input-field-desc">
                      <label htmlFor="description">Food Item Description</label>
                      <div></div>
                      <textarea
                        type="text"
                        name="description"
                        id="description"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
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

export default UpdateRestaurant
