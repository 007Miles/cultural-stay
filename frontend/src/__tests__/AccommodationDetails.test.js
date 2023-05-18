import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AccommodationDetails from './AccommodationDetails'

describe('AccommodationDetails', () => {
  test('renders AccommodationDetails component', () => {
    render(<AccommodationDetails />)
    expect(
      screen.getByText('Punchi Doowa, Private Mud House Near Kamburugamuwa')
    ).toBeInTheDocument()
  })

  test('renders amenities', () => {
    render(<AccommodationDetails />)
    const amenities = ['Kitchen', 'Wifi', 'Free parking', 'Cooking classes']
    amenities.forEach((amenity) => {
      expect(screen.getByText(amenity)).toBeInTheDocument()
    })
  })

  test('renders host name', () => {
    render(<AccommodationDetails />)
    expect(screen.getByText('Hosted by Hettie')).toBeInTheDocument()
  })

  test('renders reserve button', () => {
    render(<AccommodationDetails />)
    expect(screen.getByText('Reserve')).toBeInTheDocument()
  })

  test('opens and closes the reserve modal', () => {
    render(<AccommodationDetails />)
    const reserveButton = screen.getByText('Reserve')

    fireEvent.click(reserveButton)
    expect(screen.getByText('Reserve Accommodation')).toBeInTheDocument()

    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)
    expect(screen.queryByText('Reserve Accommodation')).not.toBeInTheDocument()
  })
})
