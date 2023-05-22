import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/Home'

import Attractions from '../pages/TouristAttraction/attractionsPage'
import Registration from '../pages/Registration/registration'
import AccommodationHome from '../pages/Accommodation/AccommodationHome.js'
import AccommodationDetails from '../pages/Accommodation/AccommodationDetails'
import HostDashboardProfile from '../pages/Host/HostDashboardProfile.js'
import AccommodationForm from '../pages/Accommodation/AccommodationForm.js'
import Feedback from '../components/FeedBack and Review/Feedback'
import ErrorPage from '../pages/error'
import Foods from '../pages/Food/Food'
import SingleFood from '../pages/Food/SingleFood'
import RestaurantsByFood from '../pages/Restaurants/RestaurantsByFood'
import Restaurants from '../pages/Restaurants/Restaurant'
import SingleRestaurant from '../pages/Restaurants/SingleRestaurant'
import AddFood from '../pages/Admin/AddFood'
import UpdateFood from '../pages/Admin/UpdateFood'
import AddRestaurant from '../pages/Admin/AddRestaurant'
import UpdateRestaurant from '../pages/Admin/UpdateRestaurant'
import HostEditPersonalInformation from '../pages/Host/HostEditPersonalInformation.js'
import HostDashboardReservationAll from '../pages/Host/HostDashboardReservationAll.js'
import HostDashboardReservationDetail from '../pages/Host/HostDashboardReservationDetail.js'
import HostDashboardPlaceUpdate from '../pages/Host/HostDashboardPlaceUpdate.js'
import HostDashboardReservationHistory from '../pages/Host/HostDashboardReservationHistory.js'
import AttractionView from '../components/Attractions/attractionView'
import Search from '../pages/Search/Search'
import CreateAttraction from '../components/Attractions/createAttraction'
import RecommendAttraction from '../components/Attractions/recommendAttraction'
import AttractionsList from '../components/Attractions/attractionsList'
import Footer from '../components/Footer/footer'
import FoodByRestaurants from '../pages/Food/FoodByRestaurants'
import AdminFoods from '../pages/Admin/AdminFoods'
import AdminRestaurants from '../pages/Admin/AdminRestaurants'
import Login from '../components/login/login'
import AdminRoutes from './adminRoutes'
import RecommendationList from '../components/Attractions/recommendationList'
import ReservationHistoryDetail from '../pages/Host/ReservationHistoryDetail.js'

const IndexRoutes = () => {
  return (
    <div>
      <AdminRoutes />
      {/* <div class="bg-gradient-to-t from-cyan-200 to-[#a6c1ee] min-h-screen"> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/attractionView/:id" element={<AttractionView />} />
        <Route path="/createAttraction" element={<CreateAttraction />} />
        <Route path="/recommendation" element={<RecommendAttraction />} />
        {/* <Route path="/admin/attractionsList" element={<AttractionsList />} />
        <Route
          path="/admin/recommendationsList"
          element={<RecommendationList />}
        /> */}

        <Route path="feedback" element={<Feedback />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />

        <Route path="/accommodationHome" element={<AccommodationHome />} />
        <Route
          path="/accommodationDetails/:id"
          element={<AccommodationDetails />}
        />
        <Route path="/accommodationForm" element={<AccommodationForm />} />

        <Route
          path="/hostDashboardProfile"
          element={<HostDashboardProfile />}
        />
        <Route
          path="/hostEditPersonalInformation/:id"
          element={<HostEditPersonalInformation />}
        />
        <Route
          path="/hostDashboardReservationAll"
          element={<HostDashboardReservationAll />}
        />
        <Route
          path="/hostDashboardReservationDetail/:id"
          element={<HostDashboardReservationDetail />}
        />
        <Route
          path="/reservationHistoryDetail/:id"
          element={<ReservationHistoryDetail />}
        />
        <Route
          path="/hostDashboardPlaceUpdate"
          element={<HostDashboardPlaceUpdate />}
        />
        <Route
          path="/hostDashboardReservationHistory"
          element={<HostDashboardReservationHistory />}
        />

        <Route path="/food" element={<Foods />} />
        <Route path="/food/:id" element={<SingleFood />} />
        <Route path="/food/by-restaurant/:id" element={<FoodByRestaurants />} />

        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<SingleRestaurant />} />
        <Route
          path="/restaurants/by-food/:id"
          element={<RestaurantsByFood />}
        />

        {/* <Route path="/admin/food" element={<AdminFoods />} />
        <Route path="/admin/restaurants" element={<AdminRestaurants />} />
        <Route path="/admin/add-food" element={<AddFood />} />
        <Route path="/admin/update-food/:id" element={<UpdateFood />} />
        <Route path="/admin/add-restaurant" element={<AddRestaurant />} />
        <Route
          path="/admin/update-restaurant/:id"
          element={<UpdateRestaurant />}
        /> */}

        {/* insert all routes above the error route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default IndexRoutes
