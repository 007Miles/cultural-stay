import React, { useState } from 'react'
import './form.css'
// import axios from 'axios'
// import Navbar from '../../components/navbar'

// const productUrl = 'http://localhost:3008/api/v1/products'

const AddFood = () => {
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
        <h2>Add New Food Item</h2>
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
                      <label htmlFor="product_name">Food Item Name</label>
                      <input
                        type="text"
                        name="product_name"
                        id="product_name"
                        // value={product_name}
                        // onChange={(e) => setProduct_name(e.target.value)}
                        placeholder="Enter Food Item Name"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">
                        Food Item Sinhala Name
                      </label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
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
                        // value={image}
                        // onChange={(e) => setImage(e.target.value)}
                        placeholder="Upload Upto 4 Images"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">
                        Food Item Ingredients
                      </label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Food Item Ingredient 1"
                        required
                      ></input>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Food Item Ingredient 2"
                        required
                      ></input>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Food Item Ingredient 3"
                        required
                      ></input>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Food Item Ingredient 4"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">
                        Food Item Cooking Method
                      </label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Food Item Method 1"
                        required
                      ></input>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Food Item Method 2"
                        required
                      ></input>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Food Item Method 3"
                        required
                      ></input>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Food Item Method 4"
                        required
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">
                        Available Restaurants
                      </label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Available Restaurant 1"
                        required
                      ></input>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Available Restaurant 2"
                        required
                      ></input>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Available Restaurant 3"
                        required
                      ></input>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        // value={manufacturer}
                        // onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Enter Available Restaurant 4"
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

export default AddFood
