import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/Home'

import Attractions from '../pages/TouristAttraction/attractions'
import Registration from '../pages/Registration/registration'
import AccommodationHome from '../pages/Home/AccommodationHome.js'
import AccommodationDetails from '../pages/Home/AccommodationDetails'
import AccommodationForm from '../pages/Home/AccommodationForm'
import Feedback from '../components/FeedBack and Review/Feedback'
import AttractionView from '../components/Attractions/attractionView'

const IndexRoutes = () => {
  return (
    <div class="bg-gradient-to-t from-cyan-200 to-[#a6c1ee] min-h-screen">
      {/* <div class="bg-gradient-to-t from-[#c2fbd3] to-[#a6c1ee] h-screen w-screen"> */}
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
      </Routes>
      {/* </div> */}
    </div>
  )
}

export default IndexRoutes
