import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links } from './data'
import { Link } from 'react-router-dom'
import './navbar.css'
import pic from './cultural-stay1.png'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

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
                  <a href={url}>{text}</a>
                </li>
              )
            })}
            <li key={7}>
              <Link to="/accommodationDetails/6456bd46925829cfd2eebb02">
                test
              </Link>
            </li>
          </ul>
        </div>
        <div className="login-icon">
          <Link to="/login">
            <button>Sign in</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
