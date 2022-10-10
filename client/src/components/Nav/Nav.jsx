import React, {useEffect, useState} from 'react';
import {AppBar, Typography, Toolbar, Avatar, Button} from "@material-ui/core";
import useStyles from "./navStyle";
import {Link, useLocation} from "react-router-dom";
import * as actionType from '../../constants/actionTypes';
import {useDispatch} from "react-redux";
import decode from "jwt-decode";

const Nav = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const location = useLocation();

    const handleLogout= () => {
        dispatch({ type: actionType.LOGOUT });
        window.location.href = '/'

        setUser(null);
    };
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout()
        }
        setUser(JSON.parse(localStorage.getItem("profile")))
    }, [location]);

    return (
        <>
            <AppBar position={"static"} color={"inherit"} className={classes.appBar}>
                <div className={classes.brandContainer}>
                    <Typography variant={"h3"} component={Link} to="/"
                                className={classes.heading}>Memories</Typography>

                    <img src={"/images/memories3.png"} height={70} width={70} alt={" memories"}
                         className={classes.image}/>
                </div>
                <Toolbar>
                    {user ? (<div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name}
                                src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.username} variant={"h6"}> {user.result.name}</Typography>
                        <Button variant={"contained"} className={classes.logout} color={"secondary"}
                                onClick={handleLogout}>Logout </Button>
                    </div>) : (
                        <Button component={Link} to={"/auth"} variant={"contained"} color={"primary"}>Sign In</Button>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Nav;