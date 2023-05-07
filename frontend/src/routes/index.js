import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/Home'

import AccommodationHome from '../pages/Home/AccommodationHome.js'
import AccommodationDetails from '../pages/Home/AccommodationDetails'
import AccommodationForm from '../pages/Home/AccommodationForm'
import Feedback from '../components/FeedBack and Review/Feedback'
import ErrorPage from '../pages/error'
import Foods from '../pages/Food/Food'
import SingleFood from '../pages/Food/SingleFood'
import RestaurantsByFood from '../pages/Restaurants/RestaurantsByFood'
import Restaurants from '../pages/Restaurants/Restaurant'
import SingleRestaurant from '../pages/Restaurants/SingleRestaurant'

const IndexRoutes = () => {
  return (
    <div>
      {/* <div class="bg-gradient-to-t from-[#c2fbd3] to-[#a6c1ee] h-screen w-screen"> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="/accommodationHome" element={<AccommodationHome />} />
        <Route
          path="/accommodationDetails"
          element={<AccommodationDetails />}
        />
        <Route path="/accommodationForm" element={<AccommodationForm />} />

        <Route path="/food" element={<Foods />} />
        <Route path="/food/:id" element={<SingleFood />} />

        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<SingleRestaurant />} />
        <Route
          path="/restaurants/by-food/:id"
          element={<RestaurantsByFood />}
        />

        {/* insert all routes above the error route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* </div> */}
    </div>
  )
}

export default IndexRoutes
