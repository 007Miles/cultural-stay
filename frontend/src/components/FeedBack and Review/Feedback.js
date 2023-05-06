import React, { useState, useEffect } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import axios from 'axios'

export default function Feedback() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    function getComments() {
      axios
        .get('http://localhost:4000/api/feedback/644feb454ae98832d6797b9b')
        .then((res) => {
          console.log(res.data)
          setComments(res.data.result.comments)
        })
        .catch((err) => {
          alert(err.message)
        })
    }

    getComments()
  }, [comments])

  return (
    <div class="flex items-center justify-center w-screen">
      <List sx={{ width: '100%', maxWidth: 620, bgcolor: 'background.paper' }}>
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
      </List>
    </div>
  )
}
