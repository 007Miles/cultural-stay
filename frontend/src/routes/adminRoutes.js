import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/Admin/Layout'
import Dashboard from '../components/Dashboard/Dashboard'
import Sellers from '../components/Dashboard/Sellers'

// import RequireAuth from '../components/login/RequireAuth'

export default function adminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="sellers" element={<Sellers />} />s
      </Route>
    </Routes>
  )
}
