import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/Home'

import Attractions from '../pages/TouristAttraction/attractions'
import Registration from '../pages/Registration/registration'
import AccommodationHome from '../pages/Home/AccommodationHome.js'
import AccommodationDetails from '../pages/Home/AccommodationDetails'
import HostDashboardProfile from '../pages/Home/HostDashboardProfile.js'
import AccommodationForm from '../pages/Home/AccommodationForm'
import Feedback from '../components/FeedBack and Review/Feedback'
import HostEditPersonalInformation from '../pages/Home/HostEditPersonalInformation.js'
import HostDashboardReservationAll from '../pages/Home/HostDashboardReservationAll.js'
import HostDashboardReservationDetail from '../pages/Home/HostDashboardReservationDetail.js'
import HostDashboardPlaceUpdate from '../pages/Home/HostDashboardPlaceUpdate.js'
import HostDashboardReservationHistory from '../pages/Home/HostDashboardReservationHistory.js'
import AttractionView from '../components/Attractions/attractionView'

const IndexRoutes = () => {
  return (
    <div>
      {/* <div class="bg-gradient-to-t from-cyan-200 to-[#a6c1ee] min-h-screen"> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/attractionView/:id" element={<AttractionView />} />

        <Route path="feedback" element={<Feedback />} />
        <Route path="/accommodationHome" element={<AccommodationHome />} />
        <Route
          path="/accommodationDetails"
          element={<AccommodationDetails />}
        />
        <Route path="/accommodationForm" element={<AccommodationForm />} />
        <Route
          path="/hostDashboardProfile"
          element={<HostDashboardProfile />}
        />
        <Route
          path="/hostEditPersonalInformation"
          element={<HostEditPersonalInformation />}
        />
        <Route
          path="/hostDashboardReservationAll"
          element={<HostDashboardReservationAll />}
        />
        <Route
          path="/hostDashboardReservationDetail"
          element={<HostDashboardReservationDetail />}
        />
        <Route
          path="/hostDashboardPlaceUpdate"
          element={<HostDashboardPlaceUpdate />}
        />
        <Route
          path="/hostDashboardReservationHistory"
          element={<HostDashboardReservationHistory />}
        />
      </Routes>
    </div>
  )
}

export default IndexRoutes
