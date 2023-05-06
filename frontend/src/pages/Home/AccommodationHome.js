// import React from 'react'
// import { FaArrowRight } from 'react-icons/fa'

// const AccommodationHome = () => {
//   return (
//     <div>
//       <div className="flex justify-center">
//         <div className="max-w-sm md:max-w-sm rounded-xl overflow-hidden shadow-lg bg-white h-[420px] w-[350px] mr-0 ml-16 mx-4 my-4">
//           <img
//             className="w-full h-48 md:h-64 object-cover"
//             src="https://res.cloudinary.com/itp03/image/upload/v1683166941/afAccommodation/Pink_Flower_PNG_Transparent_Clipart_b3kppb.png"
//             alt="Hotel"
//           />
//           <div className="px-6 py-2">
//             <div className="font-bold text-md  text-left">Double Room</div>
//             <div className=" text-sm  text-left">Ahangama,Sri Lanka</div>
//             <p className="text-gray-700 text-sm text-left">
//               Stay with Kasun
//               <br />
//               April 5-10
//             </p>
//           </div>
//           <div className="px-6 pt-2 pb-2 text-left">
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
//               Rs.2500.00/night
//             </span>
//             <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-white-700">
//               Available
//             </span>
//             <span className="inline-block  rounded-full px- py-1 text-sm font-semibold text-white-700 mr-4">
//               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded-full flex items-center mr-2">
//                 <FaArrowRight />
//               </button>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AccommodationHome

import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const AccommodationHome = () => {
  const culturalStayHotels = [
    {
      name: 'Double Room',
      location: 'Ahangama, Sri Lanka',
      host: 'Kasun',
      dates: 'April 5-10',
      price: 'Rs.2500.00/night',
      image:
        'https://res.cloudinary.com/itp03/image/upload/v1683166941/afAccommodation/Pink_Flower_PNG_Transparent_Clipart_b3kppb.png',
    },
    {
      name: 'Double Room',
      location: 'Ahangama, Sri Lanka',
      host: 'Kasun',
      dates: 'April 5-10',
      price: 'Rs.2500.00/night',
      image:
        'https://res.cloudinary.com/itp03/image/upload/v1683166941/afAccommodation/Pink_Flower_PNG_Transparent_Clipart_b3kppb.png',
    },
    {
      name: 'Double Room',
      location: 'Ahangama, Sri Lanka',
      host: 'Kasun',
      dates: 'April 5-10',
      price: 'Rs.2500.00/night',
      image:
        'https://res.cloudinary.com/itp03/image/upload/v1683166941/afAccommodation/Pink_Flower_PNG_Transparent_Clipart_b3kppb.png',
    },
    {
      name: 'Double Room',
      location: 'Ahangama, Sri Lanka',
      host: 'Kasun',
      dates: 'April 5-10',
      price: 'Rs.2500.00/night',
      image:
        'https://res.cloudinary.com/itp03/image/upload/v1683166941/afAccommodation/Pink_Flower_PNG_Transparent_Clipart_b3kppb.png',
    },
    {
      name: 'Double Room',
      location: 'Ahangama, Sri Lanka',
      host: 'Kasun',
      dates: 'April 5-10',
      price: 'Rs.2500.00/night',
      image:
        'https://res.cloudinary.com/itp03/image/upload/v1683166941/afAccommodation/Pink_Flower_PNG_Transparent_Clipart_b3kppb.png',
    },
    // Add more hotel objects here
  ]

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {culturalStayHotels.map((hotel, index) => (
          <div
            key={index}
            className="max-w-sm md:max-w-sm rounded-xl overflow-hidden shadow-lg bg-white h-[420px] w-[350px] mx-4 my-4 md:w-1/4"
          >
            <img
              className="w-full h-48 md:h-64 object-cover"
              src={hotel.image}
              alt="Hotel"
            />
            <div className="px-6 py-2">
              <div className="font-bold text-md text-left">{hotel.name}</div>
              <div className="text-sm text-left">{hotel.location}</div>
              <p className="text-gray-700 text-sm text-left">
                Stay with {hotel.host}
                <br />
                {hotel.dates}
              </p>
            </div>
            <div className="px-6 pt-2 pb-2 text-left">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
                {hotel.price}
              </span>
              <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-white-700">
                Available
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
