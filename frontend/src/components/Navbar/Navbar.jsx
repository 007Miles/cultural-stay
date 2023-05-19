import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links } from './data'
import { Link } from 'react-router-dom'
import './navbar.css'
import pic from './cultural-stay1.png'
import useAuth from '../../hooks/useAuth'
import { FaRegUser } from 'react-icons/fa'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const { auth } = useAuth()

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

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
            <span className="flex justify-center shadow-md p-4 rounded-lg">
              <FaRegUser size={28} />{' '}
              <span className="ml-2 text-xl font-bold">
                {auth.user.split('@')[0].charAt(0).toUpperCase() +
                  auth.user.split('@')[0].slice(1)}
              </span>
            </span>
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
