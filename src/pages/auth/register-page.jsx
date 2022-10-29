import * as React from 'react'
import {
  Container,
} from '@mui/material'
import RegisterPageComponent from '../../components/register-page/register-page'
import ResponsiveAppBar from '../../components/app-bar'

const RegisterPage = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <RegisterPageComponent />
    </Container>
  )
}

export default RegisterPage