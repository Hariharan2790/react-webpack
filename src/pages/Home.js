import { Container, Typography } from '@mui/material'
import React from 'react'
import ".././App.css"
function Home() {
  return (
    <>
   <Container>
    <Typography
    align='center'
    mt={5}
    variant='h1'
    color="textSecondary">
      Home page
    </Typography>
   </Container>
    </>
  )
}

export default Home