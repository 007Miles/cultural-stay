import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import axios from 'axios'

const AccommodationHome = () => {
  const [culturalStayHotels, setCulturalStayHotels] = useState([])

  useEffect(() => {
    function fetchData() {
      axios
        .get('http://localhost:4000/api/accommodation')
        .then((res) => {
          if (Array.isArray(res.data.accommodation)) {
            setCulturalStayHotels(res.data.accommodation)
          } else {
            console.error(
              'Received data is not an array:',
              res.data.accommodation
            )
          }
          console.log('your data has been received')
          console.log(res.data.accommodation)

          setCulturalStayHotels(res.data.accommodation) //using set function to retrieve data and display on website
        })
        .catch((err) => {
          alert(err.message)
        })
    }
    fetchData()
  }, [culturalStayHotels])

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {culturalStayHotels.map((accommodation) => (
          <div className="max-w-sm md:max-w-sm rounded-xl overflow-hidden shadow-lg bg-white h-[455px] w-[350px] mx-4 my-4 md:w-1/4">
            <img
              className="w-full h-48 md:h-64 object-cover"
              src={accommodation.images[0]}
              alt="Hotel"
            />
            <div className="px-6 py-2">
              <div className="font-bold text-md text-left">
                {accommodation.name}
              </div>
              <div className="text-sm text-left">{accommodation.address}</div>
              <p className="text-gray-700 text-sm text-left">
                Stay with {accommodation.createdBy}
                <br />
                Available : {accommodation.availability_from} -{' '}
                {accommodation.availability_to}
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-left">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                Rs.{accommodation.price_per_night}/night
              </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-white-700">
                {accommodation.availability}
              </span>
              <span className="inline-block flex justify-end ">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-full flex items-center mr-2">
                  <FaArrowRight />
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccommodationHome
