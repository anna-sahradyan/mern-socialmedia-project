import React from 'react';
import useStyles from "./postStyle";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import moment from "moment";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../actions/postAction";

const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (

            <Card className={classes.card}>
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
                <div className={classes.overlay}>
                    <Typography variant={"h6"} className={classes.creator}>{post.creator}</Typography>
                    <Typography variant={"body2"}
                                className={classes.date} style={{color:"blue",fontSize:14,marginLeft:"5px"}}>{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button  style={{marginLeft:"50px"}}
                        size="small"
                            onClick={() => setCurrentId(post._id)}>
                        <MoreHorizIcon fontSize="default" style={{fontSize:25,color: "red",textAlign:"center"}}/>
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography variant={"body2"}
                                color={"textSecondary"}>{post.tags.map((tag) =>` #${tag}`)}</Typography>
                </div>
                <Typography className={classes.title} variant={"h5"}  gutterBottom>{post.title}</Typography>
                <CardContent>
                    <Typography variant={"body2"} color={"textSecondary"} component={"p"} >{post.message}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size={"small"} color={"primary"} onClick={() => dispatch(likePost(post._id))} >
                        <ThumbUpAltIcon fontSize={"small"}/>
                        <b style={{color:"blue",fontSize:14}}> &nbsp; Like: &nbsp;{post.likeCount}</b>

                    </Button>
                    <Button size={"small"} color={"primary"} onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize={"small"}/> <b style={{color:"blue",fontSize:14}}>  Delete</b>

                    </Button>

                </CardActions>
            </Card>

    );
};

export default Post;