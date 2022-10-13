import React from "react";
import Post from "./Post/Post";
import {useSelector} from "react-redux";
import {CircularProgress, Grid} from "@material-ui/core";
import useStyles from "./postsStyle";


const Posts = ({ setCurrentId }) => {
    const { posts, isLoading } = useSelector((state) => state.posts);
    const classes = useStyles();

    if (!posts.length && !isLoading) return 'No posts';

    return (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {isLoading ? <CircularProgress />:(posts.map((post)=> <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>)

                )}
            </Grid>

    );
};

export default Posts;