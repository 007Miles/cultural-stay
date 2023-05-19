import './App.css'
import { BrowserRouter } from 'react-router-dom'
import IndexRoutes from './routes'
import PopUpContext from './context/PopUpContext'
import { useState } from 'react'
import PopUp from './components/Navbar/PopUp'

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false)

  return (
    <div className="App">
      <PopUpContext.Provider value={{ showConfirmation, setShowConfirmation }}>
        <BrowserRouter>
          <IndexRoutes />
          {showConfirmation && <PopUp />}
        </BrowserRouter>
      </PopUpContext.Provider>
    </div>
  )
}

export default App
