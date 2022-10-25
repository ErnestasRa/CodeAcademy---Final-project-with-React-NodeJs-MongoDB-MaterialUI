import * as React from 'react'
import {
    Link,
    Typography,
} from '@mui/material'

const Copyright = (props) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://codeacademy.lt/">
          CodeAcademy
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default Copyright