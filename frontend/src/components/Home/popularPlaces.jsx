import React from 'react'
import { Link } from 'react-router-dom'

const places = [
  {
    id: '64673e435daa6a9e27f14e1c',
    name: 'Gal Oya National Park',
    description:
      'A beautiful national park in Sri Lanka that is home to various wildlife and bird species.',
    address: 'Gal Oya National Park, Ampara, Sri Lanka',
    images: [
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684487745/afPlaces/if3tblq7uszwk0ciltu5.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684487743/afPlaces/rptqwznvtnydjxgr6lop.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684487746/afPlaces/ux1lkrqdc7rykgivab5w.jpg',
    ],
    area: 'Ampara',
  },
  {
    id: '64673ebd5daa6a9e27f14e22',
    name: 'Delft Island',
    description:
      'A small island located in the Jaffna district with beautiful scenery and wild horses.',
    address: 'Delft Island, Jaffna, Sri Lanka',
    images: [
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684487865/afPlaces/feehvr2nyypmxglj40lp.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684487867/afPlaces/kxv9dot3rddkxoehicu4.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684487869/afPlaces/k1npegl2jqsa3patuzbk.jpg',
    ],
    area: 'Jaffna',
  },
  {
    id: '64673f5c5daa6a9e27f14e26',
    name: 'Pigeon Island',
    description:
      'A beautiful island with clear blue waters and white sandy beaches located in Trincomalee.',
    address: 'Nilaveli, Trincomalee, Sri Lanka',
    images: [
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684488024/afPlaces/qqqyhsbtc497ajvdxsds.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684488026/afPlaces/cmez6ag9whcxlgr4imah.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684488028/afPlaces/hkqmhquvuzxmgh0nmaqv.jpg',
    ],
    area: 'Trincomalee',
  },
  {
    id: '64673fb85daa6a9e27f14e2a',
    name: 'Ritigala',
    description:
      'A beautiful forest monastery located in the Anuradhapura district with ruins of ancient buildings and a scenic hiking trail.',
    address: 'Ritigala, Anuradhapura, Sri Lanka',
    images: [
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684488116/afPlaces/azdo1rtrowcqe6abra7n.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684488118/afPlaces/lfdljz5mebvkojnmqit1.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1684488119/afPlaces/swvanortif4vasalh28l.jpg',
    ],
    area: 'Anuradhapura',
  },
]

const PlaceCard = ({ place }) => {
  // const [hovered, setHovered] = React.useState(false);

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-xl hover:shadow-slate-400">
      {/* <a href=`/{place.id}`> */}
      <Link to={`/attractionView/${place.id}`}>
        <img class="rounded-t-lg" src={place.images[0]} alt={place.name} />
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
      <div className="mt-[60px] text-4xl text-center mb-8 capitalize text-[color:#324d67] mb-3 font-semibold">
        <h2>Most Visited Places</h2>
        <div className="w-20 h-1 mb-5 mx-auto bg-[#0092FB]"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  )
}

export default PlacesList
