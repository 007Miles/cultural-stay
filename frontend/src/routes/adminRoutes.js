import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/Admin/Layout'
import Dashboard from '../components/Dashboard/Dashboard'
import Sellers from '../components/Dashboard/Sellers'
import RequireAuth from '../components/login/RequireAuth'
import AttractionsList from '../components/Attractions/attractionsList'
import RecommendationList from '../components/Attractions/recommendationList'
import UpdateRestaurant from '../pages/Admin/UpdateRestaurant'
import AddRestaurant from '../pages/Admin/AddRestaurant'
import UpdateFood from '../pages/Admin/UpdateFood'
import AddFood from '../pages/Admin/AddFood'
import AdminRestaurants from '../pages/Admin/AdminRestaurants'
import AdminFoods from '../pages/Admin/AdminFoods'

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
          <Route path="/admin/food" element={<AdminFoods />} />
          <Route path="/admin/restaurants" element={<AdminRestaurants />} />
          <Route path="/admin/add-food" element={<AddFood />} />
          <Route path="/admin/update-food/:id" element={<UpdateFood />} />
          <Route path="/admin/add-restaurant" element={<AddRestaurant />} />
          <Route
            path="/admin/update-restaurant/:id"
            element={<UpdateRestaurant />}
          />
        </Route>
      </Route>
    </Routes>
  )
}
