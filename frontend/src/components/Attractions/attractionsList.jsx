// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import TouristAttractionUpdateForm from './attractionUpdate'
// import { Link } from 'react-router-dom'
// import Sidebar from '../Dashboard/Sidebar'

// const AttractionsList = () => {
//   const [attractions, setAttractions] = useState([])

//   useEffect(() => {
//     fetchAttractions()
//   }, [])

//   const fetchAttractions = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/TASites/')
//       setAttractions(response.data.touristAttractions)
//       console.log(response.data.touristAttractions)
//       console.log(attractions)
//     } catch (error) {
//       console.error(error)
//     }
//     //setAttractions(attractionsData)
//   }

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/TASites/${id}`)
//       fetchAttractions()
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="container mx-auto mt-10 w-2/3">
//         <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
//           <h5 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
//             Welcome to Cultural Stay Admin Dashboard
//           </h5>
//           <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
//             You can manage any Tourist Attraction & You can create a new Tourist
//             Attraction.
//           </p>
//           <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
//             <Link
//               to={`/createAttraction`}
//               class="w-[170px] sm:w-auto bg-[#0092FB] hover:bg-blue-700 hover:no-underline focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
//             >
//               <div class="text-left">
//                 <div class="-mt-1 font-sans text-sm font-semibold">
//                   Add New Tourist Attraction
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <h1 className="text-3xl font-bold mb-6 mt-10 text-gray-600">
//           Tourist Attractions
//         </h1>
//         {attractions.map((attraction) => (
//           <div
//             key={attraction._id}
//             className="bg-white border p-4 mb-8 shadow-lg rounded-xl"
//           >
//             <h2 className="text-2xl font-bold mb-4">{attraction.name}</h2>
//             <p>{attraction.description}</p>
//             <p>{attraction.address}</p>
//             <p>{attraction.area}</p>
//             <div className="flex justify-center space-x-4 mt-4">
//               {attraction.images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`${attraction.name} - ${index}`}
//                   className="w-64"
//                 />
//               ))}
//             </div>
//             <div className="flex justify-center space-x-4 mt-6">
//               <button
//                 className="inline-block px-6 py-2 mt-4 border-2 border-blue-500 bg-blue-500 text-white leading-tight uppercase rounded-full hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
//                 type="submit"
//               >
//                 Update
//               </button>
//               <button
//                 className="inline-block px-6 py-2 mt-4 border-2 border-red-500 bg-red-500 text-white leading-tight uppercase rounded-full hover:bg-red-600 hover:border-red-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
//                 onClick={() => handleDelete(attraction._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AttractionsList

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Sidebar from '../Dashboard/Sidebar'

const AttractionsList = () => {
  const [attractions, setAttractions] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetchAttractions()
  }, [])

  const fetchAttractions = async () => {
    try {
      const response = await axios.get('https://fine-teal-ostrich-tam.cyclic.app/api/TASites/')
      setAttractions(response.data.touristAttractions)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://fine-teal-ostrich-tam.cyclic.app/api/TASites/${id}`)
      fetchAttractions()
    } catch (error) {
      console.error(error)
    }
  }

  const handleEdit = (attraction) => {
    setEditingId(attraction._id)
    setName(attraction.name)
    setDescription(attraction.description)
  }

  const handleUpdate = async (id) => {
    try {
      await axios.put(`https://fine-teal-ostrich-tam.cyclic.app/api/TASites/${id}`, {
        name,
        description,
      })
      fetchAttractions()
      setEditingId(null)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="container mx-auto mt-10 w-2/3">
        <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to Cultural Stay Admin Dashboard
          </h5>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            You can manage any Tourist Attraction & You can create a new Tourist
            Attraction.
          </p>
          <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <Link
              to={`/createAttraction`}
              class="w-[170px] sm:w-auto bg-[#0092FB] hover:bg-blue-700 hover:no-underline focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <div class="text-left">
                <div class="-mt-1 font-sans text-sm font-semibold">
                  Add New Tourist Attraction
                </div>
              </div>
            </Link>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-6 mt-10 text-gray-600">
          Tourist Attractions
        </h1>
        {attractions.map((attraction) => (
          <div
            key={attraction._id}
            className="bg-white border p-4 mb-8 shadow-lg rounded-xl"
          >
            {editingId === attraction._id ? (
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
                <div className="flex justify-center mt-6">
                  <button
                    className="inline-block px-6 py-2 mt-4 border-2 border-blue-500 bg-blue-500 text-white leading-tight uppercase rounded-full hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    type="submit"
                    onClick={() => handleUpdate(attraction._id)}
                  >
                    Submit
                  </button>
                  <button
                    className="inline-block px-6 py-2 mt-4 border-2 border-red-500 bg-red-500 text-white leading-tight uppercase rounded-full hover:bg-red-600 hover:border-red-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    onClick={() => handleDelete(attraction._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">{attraction.name}</h2>
                <p>{attraction.description}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  {attraction.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${attraction.name} - ${index}`}
                      className="w-64"
                    />
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    className="inline-block px-6 py-2 mt-4 border-2 border-blue-500 bg-blue-500 text-white leading-tight uppercase rounded-full hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    onClick={() => handleEdit(attraction)}
                  >
                    Edit
                  </button>
                  <button
                    className="inline-block px-6 py-2 mt-4 border-2 border-red-500 bg-red-500 text-white leading-tight uppercase rounded-full hover:bg-red-600 hover:border-red-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    onClick={() => handleDelete(attraction._id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
        {/* The rest of your JSX ... */}
      </div>
    </div>
  )
}

export default AttractionsList
