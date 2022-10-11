import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import useStyles from "./postsStyle";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return (
    <Grid className={classes.mainContainer} container alignItems={"stretch"}>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        posts.map((post, index) => (
          <Post
            key={`${post._id}_${index}`}
            post={post}
            setCurrentId={setCurrentId}
          />
        ))
      )}
    </Grid>
  );
};

export default Posts;
