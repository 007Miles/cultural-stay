// PopUpContext.js

import React from 'react'

const PopUpContext = React.createContext({
  showConfirmation: false,
  setShowConfirmation: () => {},
  handleLogout: () => {},
})

export default PopUpContext
