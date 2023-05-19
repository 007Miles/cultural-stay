import React from 'react'
import AdminResList from '../../components/Admin/AdminResList'
import { AppProvider } from '../Restaurants/context'

function AdminRestaurants() {
  return (
    <main>
      <AppProvider>
        <div>
          <AdminResList />
        </div>
      </AppProvider>
    </main>
  )
}

export default AdminRestaurants
