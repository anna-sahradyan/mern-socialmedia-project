import React from "react";
import {Paper} from "@material-ui/core";
import {useDispatch} from "react-redux";
import moment from "moment";
import {useNavigate} from "react-router-dom";
import useStyles from "./postDetailsStyle";
const PostDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <>
            <Paper>

            </Paper>
        </>
    );
};

export default PostDetails;
