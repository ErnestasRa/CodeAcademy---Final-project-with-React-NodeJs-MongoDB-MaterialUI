import { Container, Paper } from '@mui/material'
import * as React from 'react'
import ResponsiveAppBar from '../../components/app-bar'
import CreatePostComponent from '../../components/tweets/create-tweet'
import StickyFooter from '../../components/footer-component'

const CreatePost = () => {
  return (
    <Container>
        <ResponsiveAppBar />
            <Paper>
                 <CreatePostComponent />
            </Paper>  
        <StickyFooter />
    </Container>
  )
}

export default CreatePost