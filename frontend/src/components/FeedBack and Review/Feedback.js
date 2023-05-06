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

export default function Feedback() {
  const [comments, setComments] = useState([])

  //dummy data
  const rating = 4.7
  const ratings_list = [
    {
      text: 'Kasun is an amazing host! We had such a great time with her!',
      created: '2023-05-03T18:25:36.468Z',
      postedBy: 'Eva',
      _id: '6452a8448540665498e29f0c',
    },
    {
      text: 'wonderful experience',
      created: '2023-05-03T19:06:20.807Z',
      postedBy: 'Evelyn',
      _id: '6452b1c5f550a3c4c7d30f0b',
    },
    {
      text: 'wow soo nice',
      created: '2023-05-03T19:06:20.807Z',
      postedBy: 'Alessandra',
      _id: '6452b1c5f550a3c4c7d30f0b',
    },
  ]

  useEffect(() => {
    setComments(ratings_list)
  }, [comments])

  // useEffect(() => {
  //   function getComments() {
  //     axios
  //       .get('http://localhost:4000/api/feedback/644feb454ae98832d6797b9b')
  //       .then((res) => {
  //         console.log(res.data)
  //         setComments(res.data.result.comments)
  //       })
  //       .catch((err) => {
  //         alert(err.message)
  //       })
  //   }

  //   getComments()
  // }, [comments])

  return (
    <div class="flex items-center justify-center w-screen">
      <Grid
        container
        spacing={2}
        sx={{ width: '100%', maxWidth: 1280, bgcolor: 'background.paper' }}
        className="mt-4 border-4 rounded-lg"
      >
        <Grid item xs={12} className="bg-slate-500 p-6 ">
          <div className="inline-block align-middle align-text-left ">
            <Rating name="read-only" value={rating} precision={0.5} readOnly />
            {/* <span>{rating}</span> */}
            <span> - </span>
            <span>{ratings_list.length + ' Reviews'}</span>
          </div>
        </Grid>

        {comments.map((comment) => (
          <>
            <Grid item xs={6} key={comment._id}>
              <ListItem alignItems="flex-start" key={comment._id}>
                <ListItemAvatar>
                  <Avatar alt="User" src="/static/images/avatar/1.jpg">
                    {comment.postedBy[0].toUpperCase()}
                  </Avatar>
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
