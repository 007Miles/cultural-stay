import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AccommodationHome = () => {
  const [culturalStayHotels, setCulturalStayHotels] = useState([])

  useEffect(() => {
    function fetchData() {
      axios
        // .get('http://localhost:4000/api/accommodation')
        .get('https://fine-teal-ostrich-tam.cyclic.app/api/accommodation')
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
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-700 uppercase">
        Pick a distinctive and cozy place to stay....
      </h1>

      <div class="flex flex-wrap justify-center">
        {culturalStayHotels.map((accommodation) => (
          <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white h-[360px] w-[25%] mx-4 my-4">
            <img
              class="w-full h-48 object-cover"
              src={accommodation.images[0]}
              alt="Hotel"
            />
            <div class="px-6 py-2">
              <div class="font-bold text-lg text-left">
                {accommodation.name.slice(0, 30)}...
              </div>
              <div class="text-sm text-left">{accommodation.address}</div>
              <div class="flex justify-between items-center">
                <p class="text-gray-700 text-sm text-left">
                  Stay with
                  {/* {accommodation.createdBy} */}
                  <br />
                  Available :
                  {accommodation.availability_from
                    .toString()
                    .substring(0, 10)}{' '}
                  :{' '}
                  {/* {new Date(accommodation.availability_to)
                    .toISOString()
                    .substring(0, 10)} */}
                  <t>
                    {/* {accommodation.availability_to.toString().substring(0, 10)} */}
                  </t>
                </p>
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-full flex items-center">
                  {/* <a
                    class="nav-link"
                    href={`/accommodationDetails/${accommodation._id}`}
                  > */}
                  <Link to={`/accommodationDetails/${accommodation._id}`}>
                    <FaArrowRight />
                  </Link>
                  {/* </a> */}
                  {/* 
                  <Link // Use Link instead of <a> tag
                    className="nav-link"
                    to={`/accommodationDetails/${accommodation._id}`} // Specify the route path
                  >
                    <FaArrowRight />
                  </Link> */}
                </button>
              </div>
            </div>
            <div class="px-6 pb-2 text-left">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Rs.{accommodation.price_per_night}/night
              </span>
              <span
                className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white ${
                  accommodation.availability === 'Available'
                    ? 'bg-green-500'
                    : 'bg-red-500 '
                }`}
              >
                {accommodation.availability}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccommodationHome
