import * as React from 'react'
import {
  Container,
} from '@mui/material'
import RegisterPageComponent from '../../components/register-page/register-page'
import ResponsiveAppBar from '../../components/app-bar'
import StickyFooter from '../../components/footer-component'

const RegisterPage = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <RegisterPageComponent />
      <StickyFooter />
    </Container>
  )
}

export default RegisterPage