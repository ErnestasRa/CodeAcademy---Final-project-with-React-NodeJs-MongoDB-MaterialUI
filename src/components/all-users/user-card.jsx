import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const UserProfileCard = ({ image, firstName, lastName, email }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", width: "20vh" }}>
      <CardMedia component="img" height="140" image={image} alt="none" />
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

export default UserProfileCard;
