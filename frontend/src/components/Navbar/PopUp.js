import React, { useContext } from 'react'
import PopUpContext from '../../context/PopUpContext'

const PopUp = () => {
  const { setShowConfirmation } = useContext(PopUpContext)

  const handleCancel = () => {
    setShowConfirmation(false)
  }

  const handleConfirmLogout = () => {
    setShowConfirmation(false)
    window.location.href = '/'
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-8 rounded-lg">
        <p>Are you sure you want to log out?</p>
        <div className="flex justify-end mt-4">
          <button
            className="text-red-500 px-4 py-2 rounded-md border border-red-500 mr-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="text-white bg-red-500 px-4 py-2 rounded-md"
            onClick={handleConfirmLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
  // DOM node where the pop-up will be rendered
}

export default PopUp
