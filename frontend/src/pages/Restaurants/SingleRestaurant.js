import React, { useEffect } from 'react'
import Loading from '../../components/Food/Loading'
import { useParams, Link } from 'react-router-dom'
import { Grid, Button, Container, Typography, Input } from '@mui/material'
import '../Food/sinFood.css'

const url = 'http://localhost:4000/api/restaurants/'
const resUrl = 'http://localhost:4000/api/restaurants?food='

const createMarkup = (text) => {
  return { __html: text }
}

const SingleRestaurant = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [restaurant, setRestaurant] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getRestaurant() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        console.log(data.restaurant)
        // const data = response
        if (data.restaurant) {
          const {
            name: name,
            description: description,
            image: image,
            city: city,
            address: address,
            phone: phone,
            website: website,
            area: area,
            rating: rating,
            rate_count: rate_count,
            food: food,
          } = data.restaurant

          const newRestaurant = {
            name,
            description,
            image,
            city,
            address,
            phone,
            website,
            area,
            rating,
            rate_count,
            food,
          }
          setRestaurant(newRestaurant)
        } else {
          setRestaurant(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getRestaurant()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!restaurant) {
    return <h2 className="section-title">No Restaurant to display</h2>
  }
  const {
    name,
    description,
    image,
    city,
    address,
    phone,
    website,
    area,
    rating,
    rate_count,
    food,
  } = restaurant

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
              src={image[0]}
              alt={name}
            />
          </Grid>
          <Grid item xs={12} md={4} className="text">
            <Typography variant="h2">
              {name} - {city}
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
                <Typography class="font-bold" variant="h4">
                  {address}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography class="font-bold" variant="h4">
                  {phone}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography class="font-bold" variant="h4">
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'blue',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    }}
                  >
                    {name} website
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography class="font-bold" variant="h4">
                  {rating}({rate_count} ratings)
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Link to={`/food/by-restaurant/${name}`} state={{ name }}>
                  <Button size="small" color="primary" variant="contained">
                    Find Sri Lankan Food made by {name}
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
export default SingleRestaurant
