import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { AppProvider, useGlobalContext } from './AppContext'

jest.mock('axios')

describe('AppProvider', () => {
  it('should render children properly', () => {
    render(
      <AppProvider>
        <div>Test Children</div>
      </AppProvider>
    )

    expect(screen.getByText('Test Children')).toBeInTheDocument()
  })

  it('should fetch food properly', async () => {
    const foodData = [
      {
        _id: '1',
        image: 'food1.jpg',
        name: 'Food 1',
        description: 'This is food 1',
        sinhala_name: 'Sinhala name 1',
        ingrediants: ['ingrediant 1', 'ingrediant 2'],
        method: ['method 1', 'method 2'],
        restaurants: ['restaurant 1', 'restaurant 2'],
      },
      {
        _id: '2',
        image: 'food2.jpg',
        name: 'Food 2',
        description: 'This is food 2',
        sinhala_name: 'Sinhala name 2',
        ingrediants: ['ingrediant 1', 'ingrediant 2'],
        method: ['method 1', 'method 2'],
        restaurants: ['restaurant 1', 'restaurant 2'],
      },
    ]

    axios.mockResolvedValueOnce({
      data: { food: foodData },
    })

    const TestComponent = () => {
      const { food, setSearchTerm } = useGlobalContext()

      return (
        <div>
          <button onClick={() => setSearchTerm('test')}>Search</button>
          {food.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )
    }

    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    )

    expect(screen.getByText('Search')).toBeInTheDocument()
    userEvent.click(screen.getByText('Search'))

    await screen.findByText('Food 1')
    expect(screen.getAllByText(/Food/)).toHaveLength(2)
  })

  it('should handle error while fetching food', async () => {
    axios.mockRejectedValueOnce(new Error('Unable to fetch food'))

    const TestComponent = () => {
      const { food, setSearchTerm } = useGlobalContext()

      return (
        <div>
          <button onClick={() => setSearchTerm('test')}>Search</button>
          {food.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )
    }

    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>
    )

    expect(screen.getByText('Search')).toBeInTheDocument()
    userEvent.click(screen.getByText('Search'))

    await screen.findByText('No Food Available')
    expect(screen.getByText('No Food Available')).toBeInTheDocument()
  })
})
