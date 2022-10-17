import React, {useRef, useState} from 'react';
import useStyles from "./postDetailsStyle";
import {Button, TextField, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {commentPost} from "../../actions/postAction";

const CommentSection = ({post}) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState("");
    const commentsRef = useRef();
    const dispatch = useDispatch();
    const handleComment = async () => {
        const newComments = await dispatch(commentPost(`${user?.result?.name}:${comment}`, post._id));
        setComment("");
        setComments(newComments);
        commentsRef.current.scrollIntoView({ behavior: 'smooth' });

    };

    return (
        <>

            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments</Typography>
                    {comments?.map((comm, index) => (
                        <Typography key={`${comm}_${index}`} gutterBottom variant="subtitle1">
                            <strong style={{color: "red", fontWeight: "bolder"}}>{comm.split(' :')[0]}</strong>
                            {comm.split(' :')[1]}
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
                            variant="contained" onClick={handleComment}>
                        Comment
                    </Button>
                </div>
            </div>

        </>);
};

export default CommentSection;