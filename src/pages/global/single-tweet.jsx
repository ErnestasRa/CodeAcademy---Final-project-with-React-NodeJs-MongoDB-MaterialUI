import * as React from 'react'
import {
  Box, Container, Paper,
} from '@mui/material'
import SingleTweetComponent from '../../components/tweets/single-tweet'
import { post } from '../../functions/http'
import { useNavigate } from 'react-router-dom'
import ResponsiveAppBar from '../../components/app-bar'
import StickyFooter from '../../components/footer-component'
import MainContext from '../../context/main-context'

const SingleTweet = () => {
  const {singleTweet, setSingleTweet} = React.useContext(MainContext)
  const tweetId = localStorage.getItem('id')
  const navigate = useNavigate()

  const getSingleTweetData = async () => {
    const tweetData = {
      id: tweetId
    }
    const res = await post('singletweet', tweetData)
    console.log(res.data)

    if(!res.error){
      setSingleTweet(res.data)
    } else {
      navigate('/error')
    }

    console.log(singleTweet)
  }

  React.useEffect(() => {
    getSingleTweetData()
  }, [])

  return (
    <Container>
        <ResponsiveAppBar />
            <Paper>
                 <SingleTweetComponent />
            </Paper>  
        <StickyFooter />
    </Container>
  )
}

export default SingleTweet