import React from 'react'
import Video from '../../Assets/v1.mp4'
import PlacesList from '../../components/Attractions/places'
// import './home.css'


export const Home = () => {
  return (
     <div className="">
    <div className="relative inset-0 overflow-hidden w-screen">
      <video
        className="w-screen object-cover"
        style={{ height: '750px' }}
        autoPlay
        muted
        loop
        src={Video}
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white">Explore Sri Lanka</h1>
        <p className="text-lg font-medium text-white mt-2">
          Discover amazing places to visit and create unforgettable memories
        </p>
      </div>
    </div>
    <div className=''>
        <div className=''>
            <PlacesList />
        </div>
    </div>
  </div>
  )
}
export default Home
