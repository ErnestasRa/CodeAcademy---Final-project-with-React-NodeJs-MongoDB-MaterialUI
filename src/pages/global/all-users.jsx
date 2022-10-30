import * as React from 'react'
import StickyFooter from '../../components/footer-component'
import ResponsiveAppBar from '../../components/app-bar'
import AllUsersComponent from '../../components/all-users/all-users'
import {
    Container,
    Paper,
} from '@mui/material'

const AllUsers = () => {
  return (
    <Container>
        <ResponsiveAppBar />
            <Paper>
              <AllUsersComponent />
            </Paper>  
        <StickyFooter />
    </Container>
  )
}

export default AllUsers