import React from 'react'
import { Link } from 'react-router-dom'

const restaurants = [
  {
    id: '644feb454ae98832d6797b9b',
    name: 'Milky Way Restaurant',
    description: 'No.01 Restaurant in Sri Lanka',
    address: 'Gal Oya National Park, Ampara, Sri Lanka',
    images: [
      'https://res.cloudinary.com/dbcmklrpv/image/upload/v1683387266/afRestaurant/pcgwmxri1lm0fvjesiv5.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449390/afPlaces/g1_meld5b.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449554/afPlaces/g3_ibexum.jpg',
    ],
    area: 'Ampara',
  },
  {
    id: '645786867252c4c337b9dda2',
    name: 'Bastille Restaurant',
    description: 'Sothern food seconds to none',
    address: 'Delft Island, Jaffna, Sri Lanka',
    images: [
      'https://res.cloudinary.com/dbcmklrpv/image/upload/v1683457661/afRestaurant/csj4iakfiwvll5rdfnl4.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449711/afPlaces/d3_nvpwuv.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449711/afPlaces/d2_elkug0.jpg',
    ],
    area: 'Jaffna',
  },
  {
    id: '6457876f7252c4c337b9ddaa',
    name: 'Prestige Restaurant',
    description: 'Experience the Sri Lankan magic',
    address: 'Nilaveli, Trincomalee, Sri Lanka',
    images: [
      'https://res.cloudinary.com/dbcmklrpv/image/upload/v1683457897/afRestaurant/fhkr2gnhqnozqi44dl2l.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450055/afPlaces/p3_l23ed0.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450055/afPlaces/p3_l23ed0.jpg',
    ],
    area: 'Trincomalee',
  },
  {
    id: '645788c07252c4c337b9ddae',
    name: 'Royal Restaurant',
    description: 'Come and enjoy a luxerious meal with us',
    address: 'Ritigala, Anuradhapura, Sri Lanka',
    images: [
      'https://res.cloudinary.com/dbcmklrpv/image/upload/v1683458233/afRestaurant/vxpqcg3bljphupeiqzvx.jpg',
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
      <Link to={`/restaurants/${restaurant.id}`}>
        <img
          class="w-full h-[270px] rounded-t-lg"
          src={restaurant.images[0]}
          alt={restaurant.name}
        />
      </Link>
      {/* </a> */}
      <div class="p-5">
        <Link to={`/restaurants/${restaurant.id}`}>
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
      <div className="mt-[60px] text-4xl text-center mb-8 capitalize text-[color:#324d67] mb-3 font-semibold">
        <h2>Most Visited restaurants</h2>
        <div className="w-20 h-1 mb-5 mx-auto bg-[#0092FB]"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantsList
