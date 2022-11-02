import * as React from "react";
import { styled } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";

const PostComponent = ({
  firstName,
  lastName,
  image,
  tweet,
  likesCount,
  onClick,
  email,
  userImage,
}) => {
  return (
    <Card sx={{ width: "70vh", display: "flex", flexDirection: "column" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {firstName.charAt(0)}
          </Avatar>
        }
        title={`${firstName} ${lastName}`}
        subheader={email}
      />
      <CardMedia component="img" height="194" image={image} alt="none" />
      <CardContent>
        <Typography variant="body2">{tweet}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography color="text.secondary">
          Likes count: {likesCount}
        </Typography>
        <Box>
          <Button onClick={onClick}>View tweet</Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostComponent;
