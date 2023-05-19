import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

export default function DashboardStatGrid() {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Site Visits
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              54232
            </strong>
            <span className="text-sm text-green-500 pl-2"></span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Registered Accommodations
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">14</strong>
            <span className="text-sm text-green-500 pl-2"></span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Active Users
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              12313
            </strong>
            <span className="text-sm text-red-500 pl-2"></span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Reserves made
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">9</strong>
            <span className="text-sm text-red-500 pl-2"></span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  )
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  )
}
