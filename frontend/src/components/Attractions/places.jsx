import React from 'react'
import { Link } from 'react-router-dom'

const places = [
  {
    id: 1,
    name: 'Paris',
    image:
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683242604/afPlaces/bc9o44xyv2d8dpxjtztw.jpg',
    description:
      'Paris, the City of Light and the world’s most popular tourist destination, has every reason to be on every traveler’s bucket list.',
  },
  {
    id: 2,
    name: 'New York',
    image:
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683242604/afPlaces/bc9o44xyv2d8dpxjtztw.jpg',
    description:
      'New York City, the most populous city in the United States, is home to some of the world’s most iconic landmarks and attractions.',
  },
  {
    id: 3,
    name: 'London',
    image:
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683242604/afPlaces/bc9o44xyv2d8dpxjtztw.jpg',
    description:
      'London, the capital city of England and the United Kingdom, is one of the world’s most vibrant and diverse cities, with a rich history and culture.',
  },
  {
    id: 3,
    name: 'London',
    image:
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683242604/afPlaces/bc9o44xyv2d8dpxjtztw.jpg',
    description:
      'London, the capital city of England and the United Kingdom, is one of the world’s most vibrant and diverse cities, with a rich history and culture.',
  },
]

const PlaceCard = ({ place }) => {
  // const [hovered, setHovered] = React.useState(false);

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      {/* <a href=`/{place.id}`> */}
      <Link to={`/attractionView/${place.id}`}>
        <img class="rounded-t-lg" src={place.image} alt={place.name} />
      </Link>
      {/* </a> */}
      <div class="p-5">
        <Link to={`/attractionView/${place.id}`}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600">
            {place.name}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 ">{place.description}</p>
      </div>
    </div>
  )
}

const PlacesList = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">
        Most Visited Places
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  )
}

export default PlacesList
