import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
describe('Navbar Component', () => {
  test('renders the Navbar component', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    )

    // Check if the logo image and sign in button are rendered
    expect(screen.getByAltText('logo')).toBeInTheDocument()
    expect(screen.getByText('Sign in')).toBeInTheDocument()
  })

  test('toggle button shows and hides links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    )

    // Click the toggle button
    const toggleButton = screen.getByRole('button', { name: '' })
    fireEvent.click(toggleButton)

    // Check if the links are shown
    const firstLink = screen.getByAltText('logo')
    expect(firstLink).toBeInTheDocument()

    // Click the toggle button again
    fireEvent.click(toggleButton)

    // Check if the links are visible
    expect(firstLink).toBeVisible()
  })

  test('check if links are rendered', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    )

    const toggleButton = screen.getByRole('button', { name: '' })
    fireEvent.click(toggleButton)

    // Check if all the links are rendered
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(8)
  })
})
