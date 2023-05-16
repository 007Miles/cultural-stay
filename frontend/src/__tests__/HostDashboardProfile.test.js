import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import axios from 'axios'
import HostDashboardProfile from '../pages/Host/HostDashboardProfile.js'

jest.mock('axios')

describe('HostDashboardProfile', () => {
  const mockHostData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
    languages: 'English, Spanish',
  }

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { host: mockHostData } })
  })

  it('renders the host data', async () => {
    render(<HostDashboardProfile />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => screen.getByText('Dashboard'))

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('All Reservations')).toBeInTheDocument()
    expect(screen.getByText('Reservation History')).toBeInTheDocument()
    expect(screen.getByText('Accommodation Edit')).toBeInTheDocument()

    expect(screen.getByText('Personal Information')).toBeInTheDocument()
    expect(screen.getByText('Full name')).toBeInTheDocument()
    expect(screen.getByText(mockHostData.name)).toBeInTheDocument()
    expect(screen.getByText('Email address')).toBeInTheDocument()
    expect(screen.getByText(mockHostData.email)).toBeInTheDocument()
    expect(screen.getByText('Phone number')).toBeInTheDocument()
    expect(screen.getByText(mockHostData.phone)).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(
      screen.getByText(`${mockHostData.address} Lanka`)
    ).toBeInTheDocument()
    expect(screen.getByText('Languages')).toBeInTheDocument()
    expect(screen.getByText(mockHostData.languages)).toBeInTheDocument()

    expect(screen.getByText('Edit Profile')).toBeInTheDocument()
  })

  it('calls the API with the correct hostId', async () => {
    render(<HostDashboardProfile />)
    await waitFor(() => screen.getByText('Dashboard'))

    expect(axios.get).toHaveBeenCalledWith(
      'http://localhost:4000/api/hostLocal/64525da5476b8cab8b1e6c08'
    )
  })
})
