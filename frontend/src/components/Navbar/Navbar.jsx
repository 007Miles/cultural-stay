import React, { useState, useRef, useEffect, useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { links } from './data'
import { Link } from 'react-router-dom'
import './navbar.css'
import pic from './cultural-stay1.png'
import useAuth from '../../hooks/useAuth'
import { FaRegUser } from 'react-icons/fa'
import { TbLogout } from 'react-icons/tb'
import PopUpContext from '../../context/PopUpContext'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  // const [showConfirmation, setShowConfirmation] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const { auth } = useAuth()
  const { setShowConfirmation } = useContext(PopUpContext)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  const handleLogout = () => {
    // Perform logout action here (e.g., clearing user session)
    // Redirect to the login page
    window.location.href = '/'
  }

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={pic} class="" alt="logo"></img>
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  {/* <a href={url}>{text}</a> */}
                  <Link to={url}> {text}</Link>
                </li>
              )
            })}
            {/* <li key={7}>
              <Link to="/accommodationDetails/6456bd46925829cfd2eebb02">
                test
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="login-icon ">
          {auth?.user ? (
            <div>
              <span className="flex justify-center shadow-md p-4 rounded-lg">
                <FaRegUser size={28} />{' '}
                <span className="ml-2 text-xl font-bold border-r-4 pr-2 border-slate-800">
                  {auth.user.split('@')[0].charAt(0).toUpperCase() +
                    auth.user.split('@')[0].slice(1)}
                </span>
                <span
                  className="ml-4 text-xl font-bold text-red-600 cursor-pointer"
                  title="Log Out"
                  onClick={() => setShowConfirmation(true)}
                >
                  <TbLogout size={32} />
                </span>
              </span>
              {/* {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 ">
                  <div className="bg-white p-8 rounded-lg">
                    <p>Are you sure you want to log out?</p>
                    <div className="flex justify-end mt-4">
                      <button
                        className="text-red-500 px-4 py-2 rounded-md border border-red-500 mr-2"
                        onClick={() => setShowConfirmation(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="text-white bg-red-500 px-4 py-2 rounded-md"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          ) : (
            <Link to="/login">
              <button>Sign in</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
