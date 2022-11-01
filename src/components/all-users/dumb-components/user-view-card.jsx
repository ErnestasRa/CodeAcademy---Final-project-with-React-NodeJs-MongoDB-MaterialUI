import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const UserViewCard = ({
  email,
  firstName,
  image,
  lastName,
  viewComments,
  viewTweets,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${firstName} ${lastName}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => viewComments()} size="small">
          View Comments
        </Button>
        <Button onClick={() => viewTweets()} size="small">
          View Tweets
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserViewCard;
