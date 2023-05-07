import React from 'react'
import { Link } from 'react-router-dom'

const restaurants = [
  {
    id: 1,
    name: 'Gal Oya National Park',
    description:
      'A beautiful national park in Sri Lanka that is home to various wildlife and bird species.',
    address: 'Gal Oya National Park, Ampara, Sri Lanka',
    images: [
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449392/afPlaces/g2_l4sl38.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449390/afPlaces/g1_meld5b.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449554/afPlaces/g3_ibexum.jpg',
    ],
    area: 'Ampara',
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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

const RestaurantCard = ({ restaurant }) => {
  // const [hovered, setHovered] = React.useState(false);

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-xl hover:shadow-slate-400">
      {/* <a href=`/{restaurant.id}`> */}
      <Link to={`/attractionView/${restaurant.id}`}>
        <img
          class="rounded-t-lg"
          src={restaurant.images[0]}
          alt={restaurant.name}
        />
      </Link>
      {/* </a> */}
      <div class="p-5">
        <Link to={`/attractionView/${restaurant.id}`}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600">
            {restaurant.name}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 ">{restaurant.description}</p>
      </div>
    </div>
  )
}

const RestaurantsList = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">
        Most Visited restaurants
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantsList
