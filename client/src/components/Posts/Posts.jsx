import React from 'react';
import Post from "./Post/Post";
import {useSelector} from "react-redux";
import {CircularProgress, Grid} from "@material-ui/core";
import useStyles from "./postsStyle";

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts)
    return (

            !posts.length ? <CircularProgress  /> : (
            <Grid className={classes.mainContainer} container alignItems={"stretch"}>
                {posts.map((post, index) => {
                    <Grid key={`${post._id}_${index}`} item xs={12} sm={6}>
                        <Post post={post}/>
                    </Grid>
                })}
            </Grid>

        )

    );
};

export default Posts;