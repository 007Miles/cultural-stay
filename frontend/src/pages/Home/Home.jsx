import React from 'react'
import Video from '../../Assets/v1.mp4'
import PlacesList from '../../components/Home/popularPlaces'
import FoodsList from '../../components/Home/featuredFoods'
import RestaurantsList from '../../components/Home/featuredRestaurants'
import HomeReview from '../../components/HomeReview/HomeReview.js'
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
            Experience Sri Lanka's cultural heritage with sustainable travel
            options
          </p>
        </div>
      </div>
      <div className="">
        <div className="mt-[60px] text-4xl text-center mb-8 capitalize text-[color:#324d67] mb-3 font-semibold">
          <h2>Welcome to Cultural Stay!</h2>
          <div className="w-20 h-1 mb-5 mx-auto bg-[#0092FB]"></div>
        </div>
        <p className="text-lg font-medium text-gray-700 mt-2 w-1/2 m-auto mb-20">
          Our platform is designed to help travelers who are eager to experience
          Sri Lanka's rich cultural heritage and traditions while enjoying
          sustainable travel options. With Cultural Stay, you can enjoy
          affordable accommodations, access to local cultural experiences, and
          the ability to leave feedback for other travelers.
        </p>
        <div className="">
          <PlacesList />
        </div>
        <div className="">
          <FoodsList />
        </div>
        <div className="">
          <RestaurantsList />
        </div>
        <div className="">
          <HomeReview />
        </div>
      </div>
    </div>
  )
}
export default Home
