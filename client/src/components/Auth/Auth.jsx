import React, {useState} from 'react';
import useStyles from "./authStyle";
import {Avatar, Button, Container, Grid, Paper, TextField, Typography} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./input";


const Auth = () => {
    const classes = useStyles();
    const isSignup = false;
    const [showPassword, setShowPassword] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = () => {

    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    return (

            <Container component={"main"} maxWidth={"xs"}>
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>

                    <Typography variant={"h5"}>
                        {isSignup ? "Sign Up" : "Sign In "}
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {isSignup && (
                                <>
                                    <Input name={"firstName"} label={"First Name"} handleChange={handleChange}/>
                                    <Input name={"firstName"} label={"First Name"} handleChange={handleChange}/>
                                </>)}
                            <Input name={"email"} label={"Email Address"} handleChange={handleChange()} type={"email"}/>
                            <Input name={"password"} label={"Password"} handleChange={handleChange()}
                                   type={setShowPassword ? "text" : "password"}
                                   handleShowPassword={handleShowPassword}/>
                            {isSignup && <Input name={"confirmPassword"} label={"Repeat Password"}
                                                handleChange={handleChange()}/>}
                        </Grid>
                        <Button type={"submit"} fullWidth variant={"contained"} color={"primary"}
                                className={classes.submit}>
                            {isSignup ? "Sign Up" : "Sign In"}
                        </Button>
                    </form>
                </Paper>
            </Container>
    );
};

export default Auth;