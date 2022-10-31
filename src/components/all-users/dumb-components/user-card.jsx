import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const UsersCard = ({ image, firstName, lastName, email }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30vh",
        height: "40vh",
        mt: "10vh",
      }}
    >
      <CardMedia component="img" height="200vh" image={image} alt="none" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firstName} {lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View profile</Button>
      </CardActions>
    </Card>
  );
};

export default UsersCard;