import * as React from 'react'
import {
    Typography,
    Box,
    Link,
} from '@mui/material'

const NotLoggedInComponent = () => {
  return (
    <Box>
        <Typography variant='h2'>
            You need to be logged in to view this content. Sign in <Link href='/login'>here</Link>
        </Typography>
    </Box>
  )
}

export default NotLoggedInComponent