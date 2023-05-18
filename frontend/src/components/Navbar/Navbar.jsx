// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//       <div class="bg-white">
//         <nav class="flex justify-between items-center w-[92%]  mx-auto">
//           <div>
//             <a href="/">
//               <h1 className="w-auto py-4 font-bold  cursor-pointer font-sigmar text-3xl">
//                 Cultural Stay
//               </h1>
//             </a>
//           </div>
//           <div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-20 top-[-100%] md:w-auto  w-full flex items-center px-5">
//             <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-lg font-poppins">
//               <li>
//                 <a class="text-gray-500 hover:text-black" href="#">
//                   Hosts
//                 </a>
//               </li>
//               <li>
//                 <a class="text-gray-500 hover:text-black" href="#">
//                   Restaurants
//                 </a>
//               </li>
//               <li>
//                 <a class="text-gray-500 hover:text-black" href="#">
//                   Food
//                 </a>
//               </li>
//               <li>
//                 <a class="text-gray-500 hover:text-black" href="/attractions">
//                   Attractions
//                 </a>
//               </li>
//               <li>
//                 <a class="text-gray-500 hover:text-black" href="#">
//                   Search
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div class="flex items-center gap-6">
//             <Link to="/registration">
//               <button class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">
//                 Sign in
//               </button>
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </div>
//   )
// }

// export default Navbar

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
