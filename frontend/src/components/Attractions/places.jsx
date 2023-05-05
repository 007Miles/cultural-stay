import React from 'react';

const places = [
  {
    id: 1,
    name: 'Paris',
    image: 'https://res.cloudinary.com/ddcutbnra/image/upload/v1683242604/afPlaces/bc9o44xyv2d8dpxjtztw.jpg',
    description:
      'Paris, the City of Light and the world’s most popular tourist destination, has every reason to be on every traveler’s bucket list.',
  },
  {
    id: 2,
    name: 'New York',
    image: 'https://res.cloudinary.com/ddcutbnra/image/upload/v1683242604/afPlaces/bc9o44xyv2d8dpxjtztw.jpg',
    description:
      'New York City, the most populous city in the United States, is home to some of the world’s most iconic landmarks and attractions.',
  },
  {
    id: 3,
    name: 'London',
    image: 'https://res.cloudinary.com/ddcutbnra/image/upload/v1683242604/afPlaces/bc9o44xyv2d8dpxjtztw.jpg',
    description:
      'London, the capital city of England and the United Kingdom, is one of the world’s most vibrant and diverse cities, with a rich history and culture.',
  },
];

const PlaceCard = ({ place }) => {
  // const [hovered, setHovered] = React.useState(false);

  return (
    // <div
    //   className="relative w-72 h-80 rounded-lg overflow-hidden shadow-md transition duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl bg-white"
    //   onMouseEnter={() => setHovered(true)}
    //   onMouseLeave={() => setHovered(false)}
    // >
    //   <img className="w-full h-48 object-cover" src={place.image} alt={place.name} />
    //   <div className="absolute inset-x-0 bottom-0 p-4 z-20">
    //     <h2 className={`text-xl font-bold ${hovered ? 'text-white' : 'text-gray-700'}`}>{place.name}</h2>
    //     <p className={`mt-2 ${hovered ? 'text-white' : 'text-gray-500'}`}>{place.description}</p>
    //   </div>
    //   {hovered && (
    //     <div className="absolute inset-0 bg-black opacity-50 z-10" />
    //   )}
    // </div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
    <a href="#">
        <img class="rounded-t-lg" src={place.image} alt={place.name} />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-600">{place.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 ">{place.description}</p>
        {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a> */}
    </div>
</div>

  );
};


const PlacesList = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Most Visited Places</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default PlacesList;
