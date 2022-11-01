import * as React from "react";
import { post } from "../../functions/http";
import UserViewCard from "./dumb-components/user-view-card";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/main-context";
import { Box, Typography } from "@mui/material";

//TODO: Fix Database to send user posts
const ViewProfileComponent = () => {
  const userId = localStorage.getItem("userId");
  const userEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();
  const {
    userProfileView,
    setUserProfileView,
    userProfileViewTweets,
    setUserProfileViewTweets,
    userProfileViewComments,
    setUserProfileViewComments,
    setUserProfileViewCommentsToggle,
    setUserProfileViewTweetsToggle,
    userProfileViewCommentsToggle,
    userProfileViewTweetsToggle,
  } = React.useContext(MainContext);

  const getUserViewData = async () => {
    const userData = {
      id: userId,
      email: userEmail,
    };

    const res = await post("viewuserprofile", userData);
    console.log(res.data);
    if (!res.error) {
      setUserProfileView(res.data.foundUser);
      setUserProfileViewTweets(res.data.foundUserPosts);
      setUserProfileViewComments(res.data.foundUserComments);
    } else {
      navigate("/notloggedin");
    }
  };

  const toggleCommentsVisibility = () => {
    if (userProfileViewCommentsToggle === "visible") {
      setUserProfileViewCommentsToggle("none");
    } else {
      setUserProfileViewCommentsToggle("visible");
    }
  };
  const toggleTweetsVisibility = () => {
    if (userProfileViewTweetsToggle === "visible") {
      setUserProfileViewTweetsToggle("none");
    } else {
      setUserProfileViewTweetsToggle("visible");
    }
  };

  React.useEffect(() => {
    getUserViewData();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "5vh",
        }}
      >
        <UserViewCard
          email={userProfileView.email}
          firstName={userProfileView.firstName}
          image={userProfileView.image}
          lastName={userProfileView.lastName}
          viewComments={() => toggleCommentsVisibility()}
          viewTweets={() => toggleTweetsVisibility()}
        />
      </Box>
      <Box>
        <Box display={userProfileViewTweetsToggle}>
          User tweets ({userProfileViewTweets.length}):
          {userProfileViewTweets.map((tweet, i) => {
            return (
              <Box key={i}>
                <Typography variant="overline">{tweet.tweet}</Typography>
              </Box>
            );
          })}
        </Box>
        <Box display={userProfileViewCommentsToggle}>
          User comments ({userProfileViewComments.length}):
          {userProfileViewComments.map((tweet, i) => {
            return (
              <Box key={i}>
                <Typography variant="overline">{tweet.comment}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ViewProfileComponent;
