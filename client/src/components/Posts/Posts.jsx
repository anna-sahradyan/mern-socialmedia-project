import React from 'react';
import useStyles from "./postsStyle";
import Post from "./Post/Post";
import {useSelector} from "react-redux";

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts)
    return (
        <>
            <h1>POSTS</h1>
            <Post/>
        </>
    );
};

export default Posts;