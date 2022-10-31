import * as React from "react";
import { post } from "../../functions/http";
import UserViewCard from "./dumb-components/user-view-card";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/main-context";
import { Box } from "@mui/material";

//TODO: Fix Database to send user posts
const ViewProfileComponent = () => {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const { userProfileView, setUserProfileView } = React.useContext(MainContext);

  const getUserViewData = async () => {
    const userData = {
      id: userId,
    };

    const res = await post("viewuserprofile", userData);
    console.log(res.data);
    if (!res.error) {
      setUserProfileView(res.data);
    } else {
      navigate("/notloggedin");
    }
  };

  React.useEffect(() => {
    getUserViewData();
  }, []);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <UserViewCard
        email={userProfileView.email}
        firstName={userProfileView.firstName}
        image={userProfileView.image}
        lastName={userProfileView.lastName}
      />
    </Box>
  );
};

export default ViewProfileComponent;
