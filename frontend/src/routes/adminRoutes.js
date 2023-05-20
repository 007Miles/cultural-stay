import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/Admin/Layout'
import Dashboard from '../components/Dashboard/Dashboard'
import Sellers from '../components/Dashboard/Sellers'
import RequireAuth from '../components/login/RequireAuth'
import AttractionsList from '../components/Attractions/attractionsList'
import RecommendationList from '../components/Attractions/recommendationList'

export default function adminRoutes() {
  return (
    <Routes>
      <Route element={<RequireAuth allowedRole={'admin'} />}>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="/admin/attractionsList" element={<AttractionsList />} />
          <Route
            path="/admin/recommendationsList"
            element={<RecommendationList />}
          />
        </Route>
      </Route>
    </Routes>
  )
}
