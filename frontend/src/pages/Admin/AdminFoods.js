import React from 'react'
import AdminFoodList from '../../components/Admin/AdminFoodList'
import { AppProvider } from '../Food/context'

function AdminFoods() {
  return (
    <main>
      <AppProvider>
        <div>
          <AdminFoodList />
        </div>
      </AppProvider>
    </main>
  )
}

export default AdminFoods
