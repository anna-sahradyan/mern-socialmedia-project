import React, {useRef, useState} from 'react';
import useStyles from "./postDetailsStyle";
import {Button, TextField, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {commentPost} from "../../actions/postAction";

const CommentSection = ({post}) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const commentsRef = useRef();
    const dispatch = useDispatch();
    const handleClick = async () => {
        const newComments = await dispatch(commentPost(`${user?.result?.name}:${comment}`, post._id));
        setComment("");
        setComments(newComments);
        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    console.log(user);
    return (
        <>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                    {comments?.map((comment, index) => (
                        <Typography key={`${comment}_${index}`} gutterBottom variant="subtitle1">
                            <strong>{comment.split(': ')[0]}</strong>
                            {comment.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef}/>
                </div>
                <div style={{width: '70%'}}>
                    <Typography gutterBottom variant="h6">Write a comment</Typography>
                    <TextField fullWidth minRows={4} variant="outlined" label="Comment" multiline value={comment}
                               onChange={(e) => setComment(e.target.value)}/>
                    <br/>
                    <Button style={{marginTop: '10px'}} fullWidth disabled={!comment.length} color="primary"
                            variant="contained" onClick={handleClick}>
                        Comment
                    </Button>
                </div>
            </div>
        </>);
};

export default CommentSection;