import * as React from 'react'
import {
  Container,
  Paper,
} from '@mui/material'
import SingleTweetComponent from '../../components/tweets/single-tweet'
import { post } from '../../functions/http'
import { useNavigate } from 'react-router-dom'
import ResponsiveAppBar from '../../components/app-bar'
import StickyFooter from '../../components/footer-component'
import MainContext from '../../context/main-context'

const SingleTweet = () => {
  const tweetId = localStorage.getItem('id')
  const {singleTweet, setSingleTweet} = React.useContext(MainContext)
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
      navigate('/notloggedin')
    }
  }

  React.useEffect(() => {
    getSingleTweetData()
  }, [])

  return (
    <Container>
        <ResponsiveAppBar />
            <Paper sx={{display:'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 2, mt:'3vh', justifyContent:'center', alignItems:'center'}}>
                <SingleTweetComponent 
                  firstName={singleTweet.firstName}
                  image={singleTweet.image}
                  tweet={singleTweet.tweet}
                />
            </Paper>  
        <StickyFooter />
    </Container>
  )
}

export default SingleTweet