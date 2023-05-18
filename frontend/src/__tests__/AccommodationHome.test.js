import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import AccommodationHome from './AccommodationHome'

jest.mock('axios')

describe('AccommodationHome', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  const mockData = {
    data: {
      accommodation: [
        {
          _id: '1',
          name: 'Test Hotel',
          address: '123 Test Street',
          images: ['https://example.com/test.jpg'],
          price_per_night: 100,
          availability: 'Available',
        },
      ],
    },
  }

  it('renders the component and fetches data', async () => {
    axios.get.mockResolvedValue(mockData)

    render(<AccommodationHome />)

    await waitFor(() => expect(axios.get).toHaveBeenCalled())

    expect(
      screen.getByText('Pick a distinctive and cozy place to stay....')
    ).toBeInTheDocument()
    expect(screen.getByText('Test Hotel...')).toBeInTheDocument()
    expect(screen.getByText('123 Test Street')).toBeInTheDocument()
    expect(screen.getByText('Rs.100/night')).toBeInTheDocument()
  })

  it('handles errors during data fetching', async () => {
    axios.get.mockRejectedValue(new Error('An error occurred'))

    jest.spyOn(window, 'alert').mockImplementation(() => {})

    render(<AccommodationHome />)

    await waitFor(() => expect(axios.get).toHaveBeenCalled())
    expect(window.alert).toHaveBeenCalledWith('An error occurred')
  })

  it('navigates to accommodation details when button is clicked', () => {
    axios.get.mockResolvedValue(mockData)

    render(<AccommodationHome />)

    const button = screen.getByRole('button', { name: '' })
    userEvent.click(button)
  })
})
