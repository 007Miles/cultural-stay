// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Sidebar from '../Dashboard/Sidebar'

// const RecommendationList = () => {
//   const [attractions, setAttractions] = useState([])

//   useEffect(() => {
//     fetchAttractions()
//   }, [])

//   const fetchAttractions = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/suggestion/')
//       setAttractions(response.data.suggestions)
//       console.log(response.data.suggestions)
//       console.log(attractions)
//     } catch (error) {
//       console.error(error)
//     }
//     //setAttractions(attractionsData)
//   }

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/suggestion/${id}`)
//       fetchAttractions()
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="container mx-auto mt-10 w-2/3">
//         <h1 className="text-3xl font-bold mb-6 mt-10 text-gray-600">
//           Tourist Attraction Suggestions
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
//                 className="inline-block px-6 py-2 mt-4 border-2 border-blue-500 bg-blue-500 text-white leading-tight rounded-full hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
//                 type="submit"
//               >
//                 Add To Attractions
//               </button>
//               <button
//                 className="inline-block px-6 py-2 mt-4 border-2 border-red-500 bg-red-500 text-white leading-tight rounded-full hover:bg-red-600 hover:border-red-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
//                 onClick={() => handleDelete(attraction._id)}
//               >
//                 Reject
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default RecommendationList

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from '../Dashboard/Sidebar'

const RecommendationList = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    fetchSuggestions()
  }, [])

  const fetchSuggestions = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/suggestion/')
      setSuggestions(response.data.suggestions)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/suggestion/${id}`)
      fetchSuggestions()
    } catch (error) {
      console.error(error)
    }
  }

  const handleApprove = async (suggestion) => {
    try {
      const newAttraction = {
        name: suggestion.name,
        description: suggestion.description,
        address: suggestion.address,
        area: suggestion.area,
        images: suggestion.images,
      }
      const formData = new FormData()
      formData.append('name', suggestion.name)
      formData.append('description', suggestion.description)
      formData.append('address', suggestion.address)
      formData.append('area', suggestion.area)
      suggestion.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image)
      })
      console.log(formData)
      await axios.post(
        'http://localhost:4000/api/TASites/fromRecom',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      handleDelete(suggestion._id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto mt-10 w-2/3">
        <h1 className="text-3xl font-bold mb-6 mt-10 text-gray-600">
          Tourist Attraction Suggestions
        </h1>
        {suggestions.map((suggestion) => (
          <div
            key={suggestion._id}
            className="bg-white border p-4 mb-8 shadow-lg rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-4">{suggestion.name}</h2>
            <p>{suggestion.description}</p>
            <p>{suggestion.address}</p>
            <p>{suggestion.area}</p>
            <div className="flex justify-center space-x-4 mt-4">
              {suggestion.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${suggestion.name} - ${index}`}
                  className="w-64"
                />
              ))}
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                className="inline-block px-6 py-2 mt-4 border-2 border-blue-500 bg-blue-500 text-white leading-tight rounded-full hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                onClick={() => handleApprove(suggestion)}
              >
                Add To Attractions
              </button>
              <button
                className="inline-block px-6 py-2 mt-4 border-2 border-red-500 bg-red-500 text-white leading-tight rounded-full hover:bg-red-600 hover:border-red-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                onClick={() => handleDelete(suggestion._id)}
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendationList
