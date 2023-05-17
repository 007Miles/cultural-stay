import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import HomeReview from '../../components/HomeReview/HomeReview.js'

describe('HomeReview', () => {
  test('renders the reviews section', () => {
    render(<HomeReview />)

    const title = screen.getByText('reviews on Cultural Stay')
    expect(title).toBeInTheDocument()

    const prevButton = screen.getByRole('button', { name: 'previous slide' })
    expect(prevButton).toBeInTheDocument()

    const nextButton = screen.getByRole('button', { name: 'next slide' })
    expect(nextButton).toBeInTheDocument()

    const firstPerson = screen.getByText('Jenny Wilson')
    expect(firstPerson).toBeInTheDocument()

    const firstQuote = screen.getByText(
      'The Cultural Stay was an amazing experience for me and my family.'
    )
    expect(firstQuote).toBeInTheDocument()
  })

  test('clicking the next button updates the slide', () => {
    render(<HomeReview />)

    const nextButton = screen.getByRole('button', { name: 'next slide' })
    fireEvent.click(nextButton)

    const secondPerson = screen.getByText('Peter Jones')
    expect(secondPerson).toBeInTheDocument()

    const secondQuote = screen.getByText(
      'I would recommend the Cultural Stay to anyone looking for a relaxing vacation.'
    )
    expect(secondQuote).toBeInTheDocument()
  })

  test('clicking the previous button updates the slide', () => {
    render(<HomeReview />)

    const prevButton = screen.getByRole('button', { name: 'previous slide' })
    fireEvent.click(prevButton)

    const lastPerson = screen.getByText('John Smith')
    expect(lastPerson).toBeInTheDocument()

    const lastQuote = screen.getByText(
      'My stay at the Cultural Stay was a truly unique and unforgettable experience.'
    )
    expect(lastQuote).toBeInTheDocument()
  })
})
