import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const AttractionView = () => {
  const { id } = useParams()
  const [place, setPlace] = useState(null)

  // Hardcoded data for preview
  const placeData = {
    id: '1',
    name: 'Sigiriya',
    images: [
      {
        original:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683242604/afPlaces/bc9o44xyv2d8dpxjtztw.jpg',
        thumbnail:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683242604/afPlaces/bc9o44xyv2d8dpxjtztw.jpg',
      },
      {
        original:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683392256/img_2_gqi2e9.webp',
        thumbnail:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683392256/img_2_gqi2e9.webp',
      },
      {
        original:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683392265/img_3_hdxprv.webp',
        thumbnail:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683392265/img_3_hdxprv.webp',
      },
    ],
    description:
      " The distance from the Colombo is 169km and is on the way to Anuradhapura or polonnaruwa. Sigiriya was designated as a world heritage site in 1982. Sigiriya is famous for it's palace ruins on top of a massive 200 meter high rock surrounded by the remains of an extensive network of gardens, reservoirs and other structures.The rock itself is a lava plug left over from an ancient long extinct volcano. It is also renowned for its ancient paintings (frescoes), which are similar to those found at Ajanta Caves in India. It is generally agreed, however, that the Sigiriya Frescoes exhibit a uniquely Sri Lankan style. Sigiriya may have been inhabited through prehistoric times.It was used as a rock-shelter mountain monastery from about the 5th century BC, with caves prepared and donated by devotees of the Buddhist Sangha. Sigiriya Museum shows photos of the excavation of Sigiriya, reproductions of the frescoes, examples and translations of some of the graffiti on the Mirror Wall, and artifacts excavated from the site. You can probably view the museum in about 1 hour. Since the museum is outside the main entrance,",
  }

  useEffect(() => {
    // Simulate an API call with hardcoded data
    const fetchPlace = () => {
      setPlace(placeData)
    }

    fetchPlace()
  }, [])

  if (!place) {
    return <div>Loading...</div>
  }

  const Slideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % place.images.length
        )
      }, 3000) // 3 seconds

      return () => clearInterval(interval)
    }, [place.images])

    return (
      <img
        className="w-full object-contain object-center rounded-lg"
        style={{ height: '750px' }}
        src={place.images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
    )
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full px-4 py-5 bg-white mx-auto mt-20 rounded-lg shadow-md">
        <div className="flex flex-col items-start space-y-5">
          <h2 className="text-3xl font-bold text-gray-700 mx-auto">
            {place.name}
          </h2>
          {/* {place.images && <Slideshow />} */}
          <div class="mx-auto w-1/2">
            <ImageGallery
              items={place.images}
              showPlayButton={true}
              showFullscreenButton={true}
              slideInterval={5000}
              slideOnThumbnailOver={true}
              showIndex={true}
              onPlay={() => {
                alert('slideshow is now playing!')
              }}
            />
          </div>
          <p className="mt-6 text-gray-700 w-full md:w-4/5 lg:w-4/5 mx-auto text-justify">
            {place.description}
          </p>
        </div>
        <Link to="/" className="text-blue-500 mt-4">
          Back to places list
        </Link>
      </div>
    </div>
  )
}

export default AttractionView

// import React, { useState, useEffect } from 'react'
// import { useParams, Link } from 'react-router-dom'

// const PlaceDetail = () => {
//   const { id } = useParams()
//   const [place, setPlace] = useState(null)

//   // Hardcoded data for preview
//   const placeData = {
//     id: '1',
//     name: 'Paris',
//     images: [
//       'https://res.cloudinary.com/ddcutbnra/image/upload/v1683242604/afPlaces/bc9o44xyv2d8dpxjtztw.jpg',
//       'https://res.cloudinary.com/ddcutbnra/image/upload/v1683207500/samples/landscapes/nature-mountains.jpg',
//     ],
//     description:
//       'Paris, the City of Light and the world’s most popular tourist destination, has every reason to be on every traveler’s bucket list.',
//   }

//   useEffect(() => {
//     // Simulate an API call with hardcoded data
//     const fetchPlace = () => {
//       setPlace(placeData)
//     }

//     fetchPlace()
//   }, [])

//   if (!place) {
//     return <div>Loading...</div>
//   }

//   const Slideshow = () => {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0)

//     const nextImage = () => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % place.images.length)
//     }

//     const prevImage = () => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex - 1 < 0 ? place.images.length - 1 : prevIndex - 1
//       )
//     }

//     return (
//       <div className="relative w-full h-64">
//         {place.images.map((image, index) => (
//           <img
//             key={index}
//             className={`w-full h-64 object-cover object-center rounded-lg absolute transition-opacity duration-500 ${
//               index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//             src={image}
//             alt={`Slide ${index + 1}`}
//           />
//         ))}
//         <div
//           className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-gray-900 to-transparent opacity-20 cursor-pointer"
//           onClick={prevImage}
//         >
//           <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8 text-white"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </div>
//         </div>
//         <div
//           className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-gray-900 to-transparent opacity-20 cursor-pointer"
//           onClick={nextImage}
//         >
//           <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8 text-white"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <Link to="/" className="text-blue-600">
//         Back to Places
//       </Link>
//       <div className="mt-6">
//         <h1 className="text-3xl font-bold mb-6 text-gray-700">{place.name}</h1>
//         <Slideshow />
//         <p className="mt-6 text-gray-700">{place.description}</p>
//       </div>
//     </div>
//   )
// }

// export default PlaceDetail
