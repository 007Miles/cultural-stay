import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/Home'
import Attractions from '../pages/TouristAttraction/attractions'

const IndexRoutes = () => {
  return (
    <div>
      <div class="bg-gradient-to-t from-cyan-200 to-[#a6c1ee] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<Attractions />} />
        </Routes>
      </div>
    </div>
  )
}

export default IndexRoutes
