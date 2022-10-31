import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/auth/register-page";
import LoginPage from "./pages/auth/login-page";
import MainPage from "./pages/global/main-page";
import ErrorPage from "./pages/global/error-page";
import AllUsers from "./pages/global/users/all-users";
import CreatePost from "./pages/global/create-tweet";
import LogOut from "./pages/global/log-out";
import SingleTweet from "./pages/global/single-tweet";
import MainContext from "../src/context/main-context";
import NotLoggedIn from "./pages/global/not-logged-in";
import UserProfile from "./pages/global/users/user-profile-page";

function App() {
  const [singleTweet, setSingleTweet] = React.useState([]);
  const [tweets, setTweets] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [toggle, setToggle] = React.useState("none");
  const [tweetComments, setTweetComments] = React.useState([]);
  const [userProfile, setUserProfile] = React.useState([]);

  return (
    <MainContext.Provider
      value={{
        setTweets,
        setSingleTweet,
        setUsers,
        setToggle,
        setTweetComments,
        setUserProfile,
        tweets,
        singleTweet,
        users,
        toggle,
        tweetComments,
        userProfile,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/notloggedin" element={<NotLoggedIn />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/singletweet" element={<SingleTweet />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;

// TODO: Profile Page, View tweet, Delete tweet, comment section, Likes count,
