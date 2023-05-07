import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TouristAttractionUpdateForm from './attractionUpdate'

const AttractionsList = () => {
  const [attractions, setAttractions] = useState([])

  const attractionsData = [
    {
      name: 'Gal Oya National Park',
      description:
        'A beautiful national park in Sri Lanka that is home to various wildlife and bird species.',
      address: 'Gal Oya National Park, Ampara, Sri Lanka',
      images: [
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449390/afPlaces/g1_meld5b.jpg',
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449392/afPlaces/g2_l4sl38.jpg',
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449554/afPlaces/g3_ibexum.jpg',
      ],
      area: 'Ampara',
    },
    {
      name: 'Delft Island',
      description:
        'A small island located in the Jaffna district with beautiful scenery and wild horses.',
      address: 'Delft Island, Jaffna, Sri Lanka',
      images: [
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449711/afPlaces/d1_fzuohi.jpg',
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449711/afPlaces/d3_nvpwuv.jpg',
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449711/afPlaces/d2_elkug0.jpg',
      ],
      area: 'Jaffna',
    },
    {
      name: 'Pigeon Island',
      description:
        'A beautiful island with clear blue waters and white sandy beaches located in Trincomalee.',
      address: 'Nilaveli, Trincomalee, Sri Lanka',
      images: [
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450055/afPlaces/p1_z2xtsw.jpg',
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450055/afPlaces/p3_l23ed0.jpg',
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450055/afPlaces/p3_l23ed0.jpg',
      ],
      area: 'Trincomalee',
    },
    {
      name: 'Ritigala',
      description:
        'A beautiful forest monastery located in the Anuradhapura district with ruins of ancient buildings and a scenic hiking trail.',
      address: 'Ritigala, Anuradhapura, Sri Lanka',
      images: [
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450224/afPlaces/r1_quumb5.jpg',
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450224/afPlaces/r2_k4gqte.jpg',
        'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450224/afPlaces/r3_ur12av.jpg',
      ],
      area: 'Anuradhapura',
    },
  ]

  useEffect(() => {
    fetchAttractions()
  }, [])

  const fetchAttractions = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:4000/api/TASites/')
    //       setAttractions(response.data.touristAttractions)
    //       console.log(response.data.touristAttractions)
    //       console.log(attractions)
    //     } catch (error) {
    //       console.error(error)
    //     }
    setAttractions(attractionsData)
  }

  const handleDelete = async (id) => {
    // try {
    //   await axios.delete(`/api/tourist-attractions/${id}`)
    //   fetchAttractions()
    // } catch (error) {
    //   console.error(error)
    // }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-600">
        Tourist Attractions
      </h1>
      {attractions.map((attraction) => (
        <div key={attraction._id} className="border p-4 mb-4">
          <h2 className="text-2xl font-bold mb-4">{attraction.name}</h2>
          <p>{attraction.description}</p>
          <p>{attraction.address}</p>
          <p>{attraction.area}</p>
          {/* {attraction.image && (
            <img
              src={attraction.image}
              alt={attraction.name}
              className="w-64 mt-4"
            />
          )} */}
          <div className="flex justify-center space-x-4 mt-4">
            {attraction.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${attractionsData.name} - ${index}`}
                className="w-64"
              />
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <TouristAttractionUpdateForm
              attraction={attraction}
              onUpdate={fetchAttractions}
            />
            <button
              className="inline-block px-6 py-2 mt-4 border-2 border-red-500 bg-red-500 text-white leading-tight uppercase rounded-full hover:blue-900 hover:bg-opacity-50 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              onClick={() => handleDelete(attraction._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AttractionsList
