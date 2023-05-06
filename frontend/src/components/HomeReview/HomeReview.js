import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import './tailwind.css'
import data from './data'
function HomeReview() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])
  return (
    <section className="section">
      <div className="title">
        <h2>reviews on Cultural Stay</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, quote } = person
          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4 className="h4style">{name}</h4>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default HomeReview
