import * as React from "react";
import { get, post } from "../../functions/http";
import MainContext from "../../context/main-context";
import UserProfileCard from "./dumb-components/user-profile";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserProfileComponent = () => {
  const urlRef = React.useRef();
  const {
    setUserProfile,
    setUserProfileTweets,
    setToggle,
    userProfile,
    userProfileTweets,
    toggle,
  } = React.useContext(MainContext);
  const navigate = useNavigate();

  const getUserProfileInfo = async () => {
    const res = await get("loggedinuser");
    if (!res.error) {
      setUserProfile(res.data.loggedInUser);
      setUserProfileTweets(res.data.loggedInUserPosts);
    } else {
      navigate("/notloggedin");
    }
  };

  const changeUserProfilePic = async () => {
    const newPicUrl = {
      url: urlRef.current.value,
      userId: userProfile._id,
    };

    const res = await post("newprofilepic", newPicUrl);
  };

  const toggleVisibility = () => {
    if (toggle === "visible") {
      setToggle("none");
    } else {
      setToggle("visible");
    }
  };

  React.useEffect(() => {
    getUserProfileInfo();
  }, []);

  return (
    <Container>
      <Paper
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <UserProfileCard
          email={userProfile.email}
          firstName={userProfile.firstName}
          image={userProfile.image}
          lastName={userProfile.lastName}
          onClick={() => toggleVisibility()}
          inputRef={urlRef}
          changeUserProfilePic={() => changeUserProfilePic()}
        />
      </Paper>
      <Paper>
        <Box>
          User tweets:
          {userProfileTweets.map((tweet, i) => {
            return (
              <Box key={i}>
                <Typography>{tweet.tweet}</Typography>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </Container>
  );
};

export default UserProfileComponent;
