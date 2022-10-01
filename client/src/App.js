import React, {useEffect, useState} from 'react';
import {AppBar, Container, Grid, Grow, Typography} from "@material-ui/core";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./style";
import {useDispatch} from "react-redux";
import {getPosts} from "./actions/postAction";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    useEffect(() => {
        dispatch(getPosts())
    }, [currentId,dispatch])
    return (
        <>
            <Container maxWidth={"lg"}>
                <AppBar position={"static"} color={"inherit"} className={classes.appBar}>
                    <Typography variant={"h2"} align={"center"} className={classes.heading}>Memories</Typography>
                    <img src={"/images/memories3.png"} height={70} width={70} alt={"memories"}
                         className={classes.image}/>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container alignItems={"stretch"} spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId}/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </>
    );
};

export default App;