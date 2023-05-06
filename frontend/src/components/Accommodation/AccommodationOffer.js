// src/components/Amenities.js
import React from 'react'

const amenitiesData = [
  { name: 'Kitchen', icon: '🍴' },
  { name: 'Wifi', icon: '📶' },
  { name: 'Free parking', icon: '🅿️' },
  { name: 'Air conditioning', icon: '❄️' },
]

const AmenityItem = ({ name, icon }) => (
  <div className="flex items-center space-x-2">
    <span className="text-2xl">{icon}</span>
    <span className="font-bold text-base  text-left mt-4">{name}</span>
  </div>
)

const AccommodationOffer = () => {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {amenitiesData.map((amenity, index) => (
          <AmenityItem key={index} name={amenity.name} icon={amenity.icon} />
        ))}
      </div>
    </section>
  )
}

export default AccommodationOffer
