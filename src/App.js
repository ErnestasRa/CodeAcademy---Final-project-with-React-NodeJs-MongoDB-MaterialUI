import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/auth/register-page';
import LoginPage from './pages/auth/login-page'
import MainPage from './pages/global/main-page';
import ErrorPage from './pages/global/error-page';
import AllUsers from './pages/global/all-users'
import CreatePost from './pages/global/create-tweet';
import LogOut from './pages/global/log-out';
import SingleTweet from './pages/global/single-tweet';
import MainContext from '../src/context/main-context'

function App() {
  const [singleTweet, setSingleTweet] = React.useState([])
  const [tweets, setTweets] = React.useState([])
  const [users, setUsers] = React.useState([])

  return (
   <MainContext.Provider value={{tweets, setTweets, singleTweet, setSingleTweet, users, setUsers}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='/users' element={<AllUsers />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/logout' element={<LogOut />} />
          <Route path='/singletweet' element={<SingleTweet />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider> 
  );
}

export default App;
