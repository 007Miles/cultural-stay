import React from 'react'
import { Link } from 'react-router-dom'

const foods = [
  {
    id: '644f9cce5acb21d2374651db',
    name: 'Milk Rice (කිරි බත්)',
    description:
      'A true Sri Lankan classic, “Kiribath” or Milk Rice as the Westerners call it, is a traditional breakfast dish as well as a celebratory treat for special occasions.',
    address: 'Gal Oya National Park, Ampara, Sri Lanka',
    images: [
      'https://res.cloudinary.com/dbcmklrpv/image/upload/v1683405235/afFood/ueqnwqoef42t28ydbt94.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449390/afPlaces/g1_meld5b.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449554/afPlaces/g3_ibexum.jpg',
    ],
    area: 'Ampara',
  },
  {
    id: '64578ca97252c4c337b9ddb4',
    name: 'Kottu (කොත්තු)',
    description:
      'Kottu roti is made from Gothamba roti and vegetables, eggs, or meat and various Spices. It is a delicious meal generally eaten at dinner time.',
    address: 'Delft Island, Jaffna, Sri Lanka',
    images: [
      'https://res.cloudinary.com/dbcmklrpv/image/upload/v1683459240/afFood/txovlrnm6cbm4p1tpcda.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449711/afPlaces/d3_nvpwuv.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683449711/afPlaces/d2_elkug0.jpg',
    ],
    area: 'Jaffna',
  },
  {
    id: '64525ec961a93e2c77a0139e',
    name: 'Rice & Curry (බත් සහ කරි)',
    description:
      'Rice is considered as the staple Food of Sri Lanka while there are over 10 varieties of this cereal grain which is widely consumed on a daily basis in many households.',
    address: 'Nilaveli, Trincomalee, Sri Lanka',
    images: [
      'https://res.cloudinary.com/dbcmklrpv/image/upload/v1683119819/afFood/qpksj3683qkwe6une5mr.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450055/afPlaces/p3_l23ed0.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450055/afPlaces/p3_l23ed0.jpg',
    ],
    area: 'Trincomalee',
  },
  {
    id: '64578f6c7252c4c337b9ddc0',
    name: 'Pittu (පිට්ටු)',
    description:
      'Enjoyed by the Sinhalese and Tamil communities alike “Pittu” is a traditional Sri Lankan dish that is quite frequented in many homes.',
    address: 'Ritigala, Anuradhapura, Sri Lanka',
    images: [
      'https://res.cloudinary.com/dbcmklrpv/image/upload/v1683459947/afFood/bxqb2gn9pacrfrm31ryf.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450224/afPlaces/r2_k4gqte.jpg',
      'https://res.cloudinary.com/ddcutbnra/image/upload/v1683450224/afPlaces/r3_ur12av.jpg',
    ],
    area: 'Anuradhapura',
  },
]

const FoodCard = ({ food }) => {
  // const [hovered, setHovered] = React.useState(false);

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-xl hover:shadow-slate-400">
      {/* <a href=`/{food.id}`> */}
      <Link to={`/food/${food.id}`}>
        <img class="rounded-t-lg" src={food.images[0]} alt={food.name} />
      </Link>
      {/* </a> */}
      <div class="p-5">
        <Link to={`/food/${food.id}`}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600">
            {food.name}
          </h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 ">{food.description}</p>
      </div>
    </div>
  )
}

const FoodsList = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">
        Popular Local Cuisines
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  )
}

export default FoodsList
