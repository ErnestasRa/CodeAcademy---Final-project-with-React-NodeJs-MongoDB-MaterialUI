import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostComponent = ({
  firstName,
  lastName,
  image,
  tweet,
  likesCount,
  onClick,
  email,
}) => {
  return (
    <Card sx={{ width: "70vh" }}>
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
