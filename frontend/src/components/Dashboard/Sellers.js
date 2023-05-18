import React from 'react'
import { Link } from 'react-router-dom'

export default function Sellers() {
  return (
    <div>
      <p>This is Sellers</p>
      <Link to="/" className="underline">
        go to dashboard
      </Link>
    </div>
  )
}
