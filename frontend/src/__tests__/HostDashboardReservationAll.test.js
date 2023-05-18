import React from 'react'
import { render, screen } from '@testing-library/react'
import HostDashboardReservationAll from './HostDashboardReservationAll'

describe('HostDashboardReservationAll', () => {
  test('renders HostDashboardReservationAll component', () => {
    render(<HostDashboardReservationAll />)
  })

  test('displays the header "Dashboard"', () => {
    render(<HostDashboardReservationAll />)
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
  })

  test('displays all buttons in the component', () => {
    render(<HostDashboardReservationAll />)
    expect(screen.getByText(/Profile/i)).toBeInTheDocument()
    expect(screen.getByText(/All Reservations/i)).toBeInTheDocument()
    expect(screen.getByText(/Reservation History/i)).toBeInTheDocument()
    expect(screen.getByText(/Accommodation Edit/i)).toBeInTheDocument()
  })

  test('displays reservation table with headers', () => {
    render(<HostDashboardReservationAll />)
    expect(screen.getByText(/Reserver Name/i)).toBeInTheDocument()
    expect(screen.getByText(/Request Date From/i)).toBeInTheDocument()
    expect(screen.getByText(/Request Date To/i)).toBeInTheDocument()
    expect(screen.getByText(/Languages/i)).toBeInTheDocument()
    expect(screen.getByText(/Country/i)).toBeInTheDocument()
    expect(screen.getByText(/No Of Passengers/i)).toBeInTheDocument()
    expect(screen.getByText(/Status/i)).toBeInTheDocument()
  })

  test('displays reservations in the table', () => {
    render(<HostDashboardReservationAll />)
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
    expect(screen.getByText(/2023-05-10/i)).toBeInTheDocument()
    expect(screen.getByText(/2023-05-15/i)).toBeInTheDocument()
    expect(screen.getByText(/English, French/i)).toBeInTheDocument()
    expect(screen.getByText(/UN/i)).toBeInTheDocument()
    expect(screen.getByText(/2/i)).toBeInTheDocument()
    expect(screen.getByText(/pending/i)).toBeInTheDocument()
  })
})
