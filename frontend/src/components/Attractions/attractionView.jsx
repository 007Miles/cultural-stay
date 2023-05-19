import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const AttractionView = () => {
  const { id } = useParams()
  const [place, setPlace] = useState(null)

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/TASites/${id}`
        )
        // Map images to the format required by ImageGallery
        const images = response.data.images.map((image) => ({
          original: image,
          thumbnail: image,
        }))
        setPlace({ ...response.data, images })
      } catch (error) {
        console.error(error)
      }
    }
    fetchPlace()
  }, [id])

  if (!place) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full px-4 py-5 bg-white mx-auto mt-20 rounded-lg shadow-xl">
        <div className="flex flex-col items-start space-y-5">
          <h2 className="text-4xl font-bold text-gray-700 mx-auto">
            {place.name}
          </h2>

          <p className="text-xl text-gray-700 mx-auto ">{place.area}</p>

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
