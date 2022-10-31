import * as React from "react";
import { Container, Paper } from "@mui/material";
import PostComponent from "../../components/tweets/dumb-components/post-component";
import { get } from "../../functions/http";
import { useNavigate } from "react-router-dom";
import MainContext from "../../context/main-context";

const MainPageComponent = () => {
  const navigate = useNavigate();
  const { tweets, setTweets } = React.useContext(MainContext);

  const getAllTweets = async () => {
    const res = await get("alltweets");
    setTweets(res);
  };

  console.log(tweets);

  const viewSingleTweet = (id) => {
    localStorage.setItem("id", id);
    navigate("/singletweet/");
  };

  React.useEffect(() => {
    getAllTweets();
  }, []);

  return (
    <Container>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: 2,
          mt: "3vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {tweets.map((tweet, i) => {
          return (
            <PostComponent
              firstName={tweet.firstName}
              image={tweet.image}
              lastName={tweet.lastName}
              likesCount={tweet.likes}
              tweet={tweet.tweet}
              email={tweet.email}
              onClick={() => viewSingleTweet(tweet._id)}
              key={i}
            />
          );
        })}
      </Paper>
    </Container>
  );
};

export default MainPageComponent;
