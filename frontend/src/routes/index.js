import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from '../pages/Home/Home'

const IndexRoutes = () => {
  return (
    <div>
      <div class="bg-gradient-to-t from-[#c2fbd3] to-[#a6c1ee] h-full w-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default IndexRoutes
