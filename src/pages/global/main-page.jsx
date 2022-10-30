import * as React from 'react'
import {
  Container,
  Paper,
} from '@mui/material'
import ResponsiveAppBar from '../../components/app-bar'
import PostComponent from '../../components/tweets/post-component'
import StickyFooter from '../../components/footer-component'
import { get, post } from '../../functions/http'
import { useNavigate } from 'react-router-dom'
import MainContext from '../../context/main-context'

const MainPage = () => {
  const navigate = useNavigate()
  const {tweets, setTweets} = React.useContext(MainContext)

  const getAllTweets = async () => {
    const res = await get('alltweets')
    setTweets(res)
  }

  const viewSingleTweet = (id) => {
    localStorage.setItem('id', id)
    navigate('/singletweet/')
  }
  
  React.useEffect(() => {
    getAllTweets()
  }, [])

  return (
    <Container>
      <ResponsiveAppBar />
          <Paper sx={{display:'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 2, mt:'3vh', justifyContent:'center', alignItems:'center'}}>
           {tweets.map((tweet, i) => {
            return <PostComponent 
              firstName={tweet.firstName}
              image={tweet.image}
              lastName={tweet.lastName}
              likesCount={tweet.likes}
              tweet={tweet.tweet}
              onClick={() => viewSingleTweet(tweet._id)}
              key={i}
            />
           })}
          </Paper>
        <StickyFooter />
      </Container>
  )
}

export default MainPage