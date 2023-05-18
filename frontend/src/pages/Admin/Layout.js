import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Dashboard/Sidebar'

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* <div className="bg-teal-200">Header</div> */}
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
