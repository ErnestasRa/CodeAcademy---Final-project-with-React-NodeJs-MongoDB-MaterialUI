import * as React from 'react'
import {
  Container,
  Paper,
} from '@mui/material'
import ResponsiveAppBar from '../components/app-bar'
import PostComponent from '../components/post-component'
import StickyFooter from '../components/footer-component'

const MainPage = () => {
  return (
    <Container>
      <ResponsiveAppBar />
          <Paper sx={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 2, mt:'3vh'}}>
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />

          </Paper>
        <StickyFooter />
      </Container>
  )
}

export default MainPage