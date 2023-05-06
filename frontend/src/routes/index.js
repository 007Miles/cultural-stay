import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/Home'

import AccommodationHome from '../pages/Home/AccommodationHome.js'
import AccommodationDetails from '../pages/Home/AccommodationDetails'
import HostDashboardProfile from '../pages/Home/HostDashboardProfile.js'
import AccommodationForm from '../pages/Home/AccommodationForm'
import Feedback from '../components/FeedBack and Review/Feedback'
import HostEditPersonalInformation from '../pages/Home/HostEditPersonalInformation.js'

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
        <Route
          path="/hostDashboardProfile"
          element={<HostDashboardProfile />}
        />
        <Route
          path="/hostEditPersonalInformation"
          element={<HostEditPersonalInformation />}
        />
      </Routes>
      {/* </div> */}
    </div>
  )
}

export default IndexRoutes
