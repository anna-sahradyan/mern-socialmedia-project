import React from "react";
import useStyles from "./postStyle";
import {
    Button, ButtonBase,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import moment from "moment";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch} from "react-redux";
import {deletePost, likePost} from "../../../actions/postAction";
import {ThumbUpAltOutlined} from "@material-ui/icons";
import {useNavigate} from "react-router-dom";

const Post = ({post, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("profile"));
    const navigate = useNavigate();
    const userId = user?.result.googleId || user?.result?._id;
    const openPost = () => {
        navigate(`/posts/${post._id}`);
    };
    const Likes = () => {
        if (post?.likes?.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <><ThumbUpAltIcon
                        fontSize="small"/>&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined
                        fontSize="small"/>&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small"/>&nbsp;Like</>;
    };


    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase className={classes.cardAction}
                        onClick={openPost}>


                <CardMedia
                    className={classes.media}
                    image={
                        post.selectedFile ||
                        "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
                    }
                    title={post.title}
                />
                <div className={classes.overlay}>
                    <Typography variant={"h6"} className={classes.creator}>
                        {post.name}
                    </Typography>
                    <Typography
                        variant={"body2"}
                        className={classes.date}
                        style={{
                            color: "blue",
                            fontSize: 14,
                            marginLeft: "5px",
                        }}
                    >
                        {moment(post.createdAt).fromNow()}
                    </Typography>
                </div>
                {(user?.result?.googleId === post?.creator ||
                    user?.result?._id === post?.creator) && (
                    <div className={classes.overlay2}>
                        <Button
                            style={{marginLeft: "50px"}}
                            size="small"
                            onClick={() => setCurrentId(post._id)}
                        >
                            <MoreHorizIcon
                                fontSize="default"
                                style={{fontSize: 25, color: "#F50057", textAlign: "center", marginLeft: "110px"}}
                            />
                        </Button>
                    </div>
                )}

                <div className={classes.details}>
                    <Typography variant={"body2"} color={"textSecondary"}>
                        {post.tags.map((tag) => ` #${tag}`)}
                    </Typography>
                </div>
                <Typography className={classes.title} variant={"h5"} gutterBottom>
                    {post.title}
                </Typography>
                <CardContent>
                    <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                        {post.message}
                    </Typography>
                </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button
                    size={"small"}
                    color={"primary"}
                    disabled={!user?.result}
                    onClick={() => dispatch(likePost(post._id))}
                >
                    <b style={{color: "blue", fontSize: 14}}>
                        {" "}
                        &nbsp; <Likes/> &nbsp;
                    </b>
                </Button>
                {user?.result?.googleId === post?.creator ||
                    user?.result?._id === post?.creator &&
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => dispatch(deletePost(post._id))}
                        style={{fontWeight: 900}}>
                        <DeleteIcon fontSize="small"/> Delete
                    </Button>
                }

            </CardActions>
        </Card>
    );
};

export default Post;
