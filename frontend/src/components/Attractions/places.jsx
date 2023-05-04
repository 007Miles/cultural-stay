import React from 'react';

const places = [
  {
    id: 1,
    name: 'Paris',
    image: 'https://picsum.photos/id/10/400/300',
    description:
      'Paris, the City of Light and the world’s most popular tourist destination, has every reason to be on every traveler’s bucket list.',
  },
  {
    id: 2,
    name: 'New York',
    image: 'https://picsum.photos/id/20/400/300',
    description:
      'New York City, the most populous city in the United States, is home to some of the world’s most iconic landmarks and attractions.',
  },
  {
    id: 3,
    name: 'London',
    image: 'https://picsum.photos/id/30/400/300',
    description:
      'London, the capital city of England and the United Kingdom, is one of the world’s most vibrant and diverse cities, with a rich history and culture.',
  },
];

const PlaceCard = ({ place }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative w-72 h-80 rounded-lg overflow-hidden shadow-md transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl bg-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="w-full h-48 object-cover" src={place.image} alt={place.name} />
      <div className="absolute inset-x-0 bottom-0 p-4 z-20">
        <h2 className={`text-xl font-bold ${hovered ? 'text-white' : 'text-gray-700'}`}>{place.name}</h2>
        <p className={`mt-2 ${hovered ? 'text-white' : 'text-gray-500'}`}>{place.description}</p>
      </div>
      {hovered && (
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      )}
    </div>
  );
};


const PlacesList = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6">Most Visited Places</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default PlacesList;
