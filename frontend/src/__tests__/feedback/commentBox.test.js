import { render, screen, fireEvent } from '@testing-library/react'
import CommentBox from './CommentBox'

describe('CommentBox', () => {
  it('renders the component with the avatar and input field', () => {
    render(<CommentBox />)
    const avatarElement = screen.getByAltText('User')
    expect(avatarElement).toBeInTheDocument()
    const inputElement = screen.getByPlaceholderText('Give your Feedback')
    expect(inputElement).toBeInTheDocument()
  })

  it('submits the form when "Add feedback" button is clicked', () => {
    const mockSubmit = jest.fn()
    render(<CommentBox onSubmit={mockSubmit} />)
    const buttonElement = screen.getByText('Add feedback')
    fireEvent.click(buttonElement)
    expect(mockSubmit).toHaveBeenCalledTimes(1)
  })
})
