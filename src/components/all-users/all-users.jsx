import * as React from 'react'
import {
    Container,
    Paper,
    Box
} from '@mui/material'
import { get } from '../../functions/http'
import UserProfileCard from '../user-card'

const AllUsersComponent = () => {
  const [users, setUsers] = React.useState([])
  
  const getAllUsers = async () => {
    const res = await get('allusers')
    setUsers(res)
  }

  React.useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <Container>
        <Paper sx={{display:'flex', flexDirection: 'row', gap:2, mt: '5vh'}}>
            {users.map((user,i) => {
                return <UserProfileCard 
                    email={user.email}
                    firstName={user.firstName}
                    image={user.image}
                    lastName={user.lastName}
                    key={i}
                />
            })}
        </Paper>
    </Container>
  )
}

export default AllUsersComponent