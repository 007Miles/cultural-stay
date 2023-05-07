import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const AttractionView = () => {
  const { id } = useParams()
  const [place, setPlace] = useState(null)

  // Hardcoded data for preview
  const placeData = {
    id: '4',
    name: 'Ritigala',
    description:
      'Ritigala mountain consists of four peaks which rise steeply from the surrounding plain. The mountain is 6.5 km in length, and divided into northern and southern blocks by Maha-Degala Gorge. The highest peak is Ritigala Kanda in the southern block.At 766 m (2,513 ft) above sea level, and 600 m (2,000 ft) above the surrounding plains, Ritigala is the highest mountain in northern Sri Lanka. The modern name Ritigala is derived from the ancient name Ariṭṭha Pabbata (Dreadful Mountain), mentioned in the Mahavamsa.Its elevation is higher than the other main tourist attractions of the north central plains, namely Sigiriya, Dambulla, and Mihintale. The significance of this topographical feature lies in the abrupt sheerness of the massif, its wooded slopes, and the wet microclimate at the summit. ',
    address: 'Ritigala, Anuradhapura, Sri Lanka',
    images: [
      {
        original:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450224/afPlaces/r1_quumb5.jpg',
        thumbnail:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450224/afPlaces/r1_quumb5.jpg',
      },
      {
        original:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450224/afPlaces/r2_k4gqte.jpg',
        thumbnail:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450224/afPlaces/r2_k4gqte.jpg',
      },
      {
        original:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450224/afPlaces/r3_ur12av.jpg',
        thumbnail:
          'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450224/afPlaces/r3_ur12av.jpg',
      },
    ],
    area: 'Anuradhapura',
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
      <div className="w-full px-4 py-5 bg-white mx-auto mt-20 rounded-lg shadow-xl">
        <div className="flex flex-col items-start space-y-5">
          <h2 className="text-3xl font-bold text-gray-700 mx-auto">
            {place.name}
          </h2>
          {/* {place.images && <Slideshow />} */}
          <div class="mx-auto w-2/3">
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
        <div className="mt-10">
          <Link to="/attractions" className="text-blue-500 mt-4">
            {`< Back to places list`}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AttractionView
