import React, { useEffect } from 'react'
import Loading from '../../components/Food/Loading'
import { useParams, Link } from 'react-router-dom'
import { Grid, Button, Container, Typography, Input } from '@mui/material'
import './sinFood.css'
import { useGlobalContext } from '../Restaurants/contextResByFood'
import axios from 'axios'

const url = 'http://localhost:4000/api/food/'
const resUrl = 'http://localhost:4000/api/restaurants?food='

const createMarkup = (text) => {
  return { __html: text }
}

const SingleFood = () => {
  // const { setSearchTerm } = useGlobalContext()
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [food, setFood] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getFood() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        console.log(data.food)
        // const data = response
        if (data.food) {
          const {
            name: name,
            sinhala_name: sinhala_name,
            description: description,
            image: image,
            ingrediants: ingrediants,
            method: method,
          } = data.food

          const newFood = {
            name,
            sinhala_name,
            description,
            image,
            ingrediants,
            method,
          }
          setFood(newFood)
        } else {
          setFood(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getFood()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!food) {
    return <h2 className="section-title">No food item to display</h2>
  }
  const { name, sinhala_name, description, image, ingrediants, method } = food

  const inputProps = {
    min: 1,
    max: 5,
  }

  // const sortRes = () => {
  //   setSearchTerm(name)
  // }

  return (
    <div>
      <Container className="product-view">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} className="image-wrapper">
            <img
              onLoad={() => {
                setLoading(false)
              }}
              crossOrigin="anonymous"
              src={image}
              alt={name}
            />
          </Grid>
          <Grid item xs={12} md={4} className="text">
            <Typography variant="h2">
              {name} ({sinhala_name})
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography class="font-bold" variant="h4">
                  {description}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h4">
                  <u>Ingrediants</u>
                </Typography>
                <ul style={{ textAlign: 'left', listStyleType: 'disc' }}>
                  {ingrediants.map((ingrediant, index) => (
                    <li key={index}>{ingrediant}</li>
                  ))}
                </ul>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h4">
                  <u>Method</u>
                </Typography>
                <ul style={{ textAlign: 'left', listStyleType: 'disc' }}>
                  {method.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Link to={`/restaurants/by-food/${name}`} state={{ food }}>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    // onClick={sortRes}
                  >
                    Find Restaurants to taste {name}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default SingleFood
