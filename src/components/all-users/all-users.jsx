import * as React from "react";
import { Container, Paper, Box } from "@mui/material";
import { get } from "../../functions/http";
import UserProfileCard from "./user-card";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/main-context";

const AllUsersComponent = () => {
  const { users, setUsers } = React.useContext(MainContext);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    const res = await get("allusers");
    if (!res.error) {
      setUsers(res);
    } else {
      navigate("/error");
    }
  };

  React.useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Container>
      <Paper sx={{ display: "flex", flexDirection: "row", gap: 2, mt: "5vh" }}>
        {users.map((user, i) => {
          return (
            <UserProfileCard
              email={user.email}
              firstName={user.firstName}
              image={user.image}
              lastName={user.lastName}
              key={i}
            />
          );
        })}
      </Paper>
    </Container>
  );
};

export default AllUsersComponent;
