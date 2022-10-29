import * as React from 'react'
import LoginPageComponent from '../../components/login-page/login-page'
import {
  Container,
} from '@mui/material'
import ResponsiveAppBar from '../../components/app-bar'

const LoginPage = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <LoginPageComponent />
    </Container>
  )
}

export default LoginPage