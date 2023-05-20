import React, { useState, useEffect } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import Rating from '@mui/material/Rating'
import Grid from '@mui/material/Grid'
import useAuth from '../../hooks/useAuth'

export default function Feedback({ id }) {
  const [comments, setComments] = useState([])
  const { auth } = useAuth()
  const [rating, setRating] = useState(0)

  //dummy data
  // const rating = 4.7
  const ratings_list = [
    {
      text: 'Kasun is an amazing host! We had such a great time with her!',
      created: '2023-05-03T18:25:36.468Z',
      postedBy: 'eva@g',
      image_url:
        'https://res.cloudinary.com/dtktpemb7/image/upload/v1683432593/cld-sample.jpg',
      _id: '6452a8448540665498e29f0c',
    },
    {
      text: 'wonderful experience',
      created: '2023-05-03T19:06:20.807Z',
      postedBy: 'Evelyn',
      image_url:
        'https://res.cloudinary.com/dtktpemb7/image/upload/v1683432577/samples/bike.jpg',
      _id: '6452b1c5f550a3c4c7d30f0b',
    },
    {
      text: 'wow soo nice',
      created: '2023-05-03T19:06:20.807Z',
      postedBy: 'Alessandra',
      image_url:
        'https://res.cloudinary.com/dtktpemb7/image/upload/v1683432577/samples/people/boy-snow-hoodie.jpg',
      _id: '6452b1c5f550a3c4c7d30f0b',
    },
  ]

  // useEffect(() => {
  //   setComments(ratings_list)
  // }, [comments])

  useEffect(() => {
    function getComments() {
      axios
        .get(`http://localhost:4000/api/feedback/${id}`)
        .then((res) => {
          console.log(res.data)
          setComments(res.data.result.comments)
          setRating(res.data.result.rating)
        })
        .catch((err) => {
          alert(err.message)
        })
    }

    getComments()
  }, [comments])

  async function handleDelete(cid) {
    // alert(cid)
    // const comment = {}

    try {
      const response = await axios.delete(
        `http://localhost:4000/api/feedback/${id}`,
        { data: { comment: cid } }
      )

      if (response) {
        // alert('success')
      }
      //   setText('')
      //   // const accessToken = response?.data?.accessToken
      //   // const role = response?.data?.role
      //   // console.log(role)
      //   // setAuth({ user, pwd, role, accessToken })
      //   // setUser('')
      //   // setPwd('')
      //   // navigate('/admin')
    } catch (err) {
      console.log(err.response.message)
    }
  }

  return (
    <div class="flex items-center justify-center">
      <Grid
        container
        spacing={2}
        sx={{ bgcolor: 'background.paper' }}
        className="w-full md:w-2/3 m-4 rounded-lg p-4 shadow-xl pb-6"
      >
        <Grid item xs={12} className=" p-1 ">
          <div className="inline-block align-middle align-text-left ">
            <Rating name="read-only" value={rating} precision={0.5} readOnly />
            {/* <span>{rating}</span> */}
            <span className="inline-block align-text-top mx-3"> . </span>
            <span>{comments.length + ' Reviews'}</span>
          </div>
          <hr className="border-b border-gray-300 my-2" />
        </Grid>

        {comments.map((comment) => (
          <>
            <Grid item xs={6} key={comment._id}>
              <ListItem alignItems="flex-start" key={comment._id}>
                <ListItemAvatar>
                  <Avatar alt="User" src={comment?.image_url}>
                    {comment.postedBy[0].toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        sx={{
                          display: 'inline',
                          fontWeight: 'bold',
                          fontSize: '21px',
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {comment.postedBy
                          .split('@')[0]
                          .charAt(0)
                          .toUpperCase() +
                          comment.postedBy.split('@')[0].slice(1)}
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline', fontSize: '18px' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {comment.text}
                        <br />
                        {comment.postedBy === auth?.user ? (
                          <button
                            class="bg-transparent hover:bg-red-500 text-black-700 font-semibold hover:text-white mt-2 px-4 border border-red-700 hover:border-transparent rounded"
                            onClick={() => handleDelete(comment._id)}
                          >
                            Delete
                          </button>
                        ) : (
                          ''
                        )}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {/* <Divider variant="inset" component="li" /> */}
            </Grid>
          </>
        ))}

        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
      {/* <List sx={{ width: '100%', maxWidth: 620, bgcolor: 'background.paper' }}>
        {comments.map((comment) => (
          <>
            <ListItem alignItems="flex-start" key={comment._id}>
              <ListItemAvatar>
                <Avatar alt="User" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline', fontWeight: 'bold' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {comment.postedBy}
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {comment.text}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List> */}
    </div>
  )
}
