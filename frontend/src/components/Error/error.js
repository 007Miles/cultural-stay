import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

const Error = () => {
  return (
    <section
      class="flex justify-center items-center mt-[70px]"
      className="page-404"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="background-404">
                <h1 className="h1h">404</h1>
              </div>
              <div className="content-box-404">
                <h3 className="h3h">Looks Like It's A Dead End</h3>
                <div>
                  <p className="paragraph">
                    The page you are looking for does not exist
                  </p>
                  <br></br>
                </div>
                <div>
                  <Link to="/">
                    <button className="buttonx">
                      <span>Go back home</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error
