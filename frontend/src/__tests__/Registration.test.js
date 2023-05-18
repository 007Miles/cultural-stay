import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Registration from '../pages/Registration/registration'

describe('Registration Component', () => {
  test('renders the Registration component', () => {
    render(<Registration />)

    expect(screen.getByText('Registration')).toBeInTheDocument()
  })

  test('updates state on input change', () => {
    render(<Registration />)

    const nameInput = screen.getByPlaceholderText('Enter your name')
    fireEvent.change(nameInput, { target: { value: 'sunil perera' } })
    expect(nameInput.value).toBe('sunil perera')

    const emailInput = screen.getByPlaceholderText('Enter your email')
    fireEvent.change(emailInput, { target: { value: 'sunil@gmail.com' } })
    expect(emailInput.value).toBe('sunil@gmail.com')
  })

  test('displays error message for empty fields on form submission', async () => {
    render(<Registration />)

    const submitButton = screen.getByText('Register')
    fireEvent.click(submitButton)

    expect(
      await screen.findByText('All fields are required')
    ).toBeInTheDocument()
  })
})
