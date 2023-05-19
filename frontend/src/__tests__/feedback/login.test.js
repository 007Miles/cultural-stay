import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Login from './Login'

describe('Login component', () => {
  it('renders username and password inputs', () => {
    render(<Login />)
    const usernameInput = screen.getByLabelText('Username')
    const passwordInput = screen.getByLabelText('Password')
    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })

  it('submits form on button click', () => {
    const handleSubmit = jest.fn()
    render(<Login onSubmit={handleSubmit} />)
    const submitButton = screen.getByRole('button', { name: /sign in/i })
    fireEvent.click(submitButton)
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })
})
