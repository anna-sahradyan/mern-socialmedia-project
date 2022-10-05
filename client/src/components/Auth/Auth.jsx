import React, {useState, useEffect} from 'react';
import useStyles from "./authStyle";
import {Avatar, Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./input";
import {useDispatch} from "react-redux";
import {GoogleLogin} from "react-google-login";
import Icon from "./icon";
import jwt_decode from "jwt-decode";

const Auth = () => {
    const google = window.google;
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = () => {

    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }
    const googleSuccess = async (res) => {
        console.log(res)
    }
    const googleFailure = () => {

    }
    const handleCredentialResponse = async (response) => {
        console.log("Encoded JWT ID token:" + response.credential);
        // const result = response?.profile ;
         const token = response.credential;
        const result = jwt_decode(response.credential)

        console.log(result)
        try {
            dispatch({type: "AUTH", data: {result, token}})
            console.log(token)
        } catch (err) {

            console.log(err)
        }
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: "363124702080-925llpa08mjds342pl57j6t0tvu59vmi.apps.googleusercontent.com",
            callback: handleCredentialResponse,
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {width: "100%"}
        )

    }, []);


    return (<>
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
                        {isSignup && (<>
                            <Input name={"firstName"} label={"First Name"} handleChange={handleChange}/>
                            <Input name={"lastName"} label={"Last Name"} handleChange={handleChange}/>
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
                    <Button style={{width: "100%"}} id={"signInDiv"}>
                    </Button>
                    {/*<GoogleLogin*/}
                    {/*    clientId="363124702080-925llpa08mjds342pl57j6t0tvu59vmi.apps.googleusercontent.com"*/}
                    {/*    render={(renderProps) => (*/}
                    {/*        <Button type={"submit"} fullWidth variant={"contained"} color={"primary"}*/}
                    {/*                className={classes.googleButton} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant={"contained"}  >Google Sign In </Button>*/}
                    {/*    )}*/}
                    {/*    onSuccess={googleSuccess}*/}
                    {/*    onFailure={googleFailure}*/}
                    {/*    cookiePolicy={"single_host_origin"}*/}
                    {/*/>*/}
                    <Grid item>
                        <Button onClick={switchMode} className={classes.switch}>
                            {isSignup ? "Already have an account ? Sign In" : "Don't have an account ? Sign Up"}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    </>);
};

export default Auth;