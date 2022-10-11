import React, { useState, useEffect } from "react";
import useStyles from "./authStyle";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./input";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { signUp, signIn } from "../../actions/authAction";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const google = window.google;
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //!block
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(signIn(formData, navigate));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleCredentialResponse = async (response) => {
    console.log("Encoded JWT ID token:" + response.credential);
    const token = response.credential;
    const result = jwt_decode(response.credential);
    console.log(result);
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "363124702080-925llpa08mjds342pl57j6t0tvu59vmi.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      width: "100%",
    });
  }, []);

  return (
    <>
      <Container component={"main"} maxWidth={"xs"}>
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant={"h5"}>
            {isSignup ? "Sign Up" : "Sign In "}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name={"firstName"}
                    label={"First Name"}
                    handleChange={handleChange}
                    half
                  />
                  <Input
                    name={"lastName"}
                    label={"Last Name"}
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <Input
                name={"email"}
                label={"Email Address"}
                handleChange={handleChange}
                type={"email"}
              />
              <Input
                name={"password"}
                label={"Password"}
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
                autoFocus
              />
              {isSignup && (
                <Input
                  name={"confirmPassword"}
                  label={"Repeat Password"}
                  handleChange={handleChange}
                  type={"password"}
                />
              )}
            </Grid>
            <Button
              type={"submit"}
              fullWidth
              variant={"contained"}
              color={"primary"}
              className={classes.submit}
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>

            <Button style={{ width: "100%" }} id={"signInDiv"}></Button>

            <Grid item>
              <Button onClick={switchMode} className={classes.switch}>
                {isSignup
                  ? "Already have an account ? Sign In"
                  : "Don't have an account ? Sign Up"}
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Auth;
