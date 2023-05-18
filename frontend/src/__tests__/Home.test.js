import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/Home/Home'

describe('Home Component', () => {
  test('renders the Home component', () => {
    render(<Home />)

    expect(screen.getByText('Explore Sri Lanka')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Cultural Stay!')).toBeInTheDocument()
  })

  test('renders the PlacesList, FoodsList, and RestaurantsList components', () => {
    render(<Home />)

    expect(screen.getByText('Popular Places')).toBeInTheDocument()
    expect(screen.getByText('Featured Foods')).toBeInTheDocument()
    expect(screen.getByText('Featured Restaurants')).toBeInTheDocument()
  })
})
