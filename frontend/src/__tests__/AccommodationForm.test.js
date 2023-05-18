import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import axios from 'axios'
import AccommodationForm from '../pages/Accommodation/AccommodationForm.js'

jest.mock('axios')

describe('AccommodationForm', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders the form correctly', () => {
    const { getByText } = render(<AccommodationForm />)
    expect(getByText(/Add New Accommodation/i)).toBeInTheDocument()
  })

  test('submits form successfully', async () => {
    const response = { data: { success: true } }
    axios.post.mockResolvedValue(response)

    const { getByLabelText, getByText, getByPlaceholderText } = render(
      <AccommodationForm />
    )
    fireEvent.change(getByPlaceholderText('Accommodation Name'), {
      target: { value: 'Test Hotel' },
    })
    fireEvent.change(getByPlaceholderText('Accommodation Address'), {
      target: { value: 'Test Address' },
    })
    fireEvent.change(getByPlaceholderText('Province'), {
      target: { value: 'Test Province' },
    })
    fireEvent.change(getByPlaceholderText('Google Map Location Link'), {
      target: { value: 'https://test-link.com' },
    })
    fireEvent.change(getByLabelText('Location Availability From'), {
      target: { value: '2023-06-01' },
    })
    fireEvent.change(getByLabelText('Location Availability To'), {
      target: { value: '2023-06-10' },
    })

    fireEvent.click(getByText('Submit'))

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1)
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:4000/api/accommodation',
        {
          Name: 'Test Hotel',
          Address: 'Test Address',
          Province: 'Test Province',
          Googlelink: 'https://test-link.com',
          AvailabilityFrom: '2023-06-01',
          AvailabilityTo: '2023-06-10',
          Guests: '',
          Bedrooms: '',
          Beds: '',
          Washrooms: '',
          Price: '',
          WelcomeType: '',
          Description: '',
          Facilities: '',
        }
      )
    })
  })

  test('displays error if required fields are missing', async () => {
    axios.post.mockRejectedValue(new Error('Network error'))

    const { getByText, getByTestId } = render(<AccommodationForm />)
    fireEvent.click(getByText('Submit'))

    await waitFor(() => {
      expect(getByTestId('error-message')).toHaveTextContent(
        /All fields are required/i
      )
    })
  })
})
