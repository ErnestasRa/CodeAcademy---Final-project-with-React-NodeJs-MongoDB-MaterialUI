import * as React from "react";
import { get } from "../../functions/http";
import MainContext from "../../context/main-context";
import UserProfileCard from "./user-card";
import { Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserProfileComponent = () => {
  const { setUserProfile, userProfile } = React.useContext(MainContext);
  const navigate = useNavigate();

  const getUserProfileInfo = async () => {
    const res = await get("loggedinuser");
    console.log(res);
    if (!res.error) {
      setUserProfile(res.data);
    } else {
      navigate("/notloggedin");
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
        />
      </Paper>
    </Container>
  );
};

export default UserProfileComponent;
