import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { setRegister } from '../redux/reducers/apiSlice';
import { initialState } from '../redux/reducers/apiSlice';
import image from "../assets/ui-auth-bg.jpg";
import Copyright from './CopyRight';

<Copyright />

const theme = createTheme();

export default function SignUpSide() {

  const [name, setName] = useState(initialState.name);
  const [email, setEmail] = useState(initialState.email);
  const [password, setPassword] = useState("");
  const [wait, setWait] = useState(false);
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);
  const [verify, setVerify] = useState(false);
  const [verifyMsg, setVerifyMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const EMAIL = (e) => {
    setEmail(e.target.value);
  };
  const NAME = (e) => {
    setName(e.target.value);
  };
  const PASSWORD = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = async (data) => {
    data.preventDefault();
    setError(false);
    setVerify(false);
    setWait(true);
    const obj = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:5000/register",
        data: obj,
      });
      if (response.status) {
        setVerify(false);
        setWait(false);
        setSend(true);
        setMessage(response.data.message);
      }
      const id = response.data.user._id;
      console.log("response", response);

      const intervalId = setInterval(async () => {
        const response2 = await axios({
          method: "GET",
          url: `http://localhost:5000/isverify/${id}`,
        });
        console.log("response2", response2.data);
        if (response2.data.user.is_verified === true) {
          setVerifyMsg(response2.data.message);
          setSend(false);
          setVerify(true);
          clearInterval(intervalId);
          dispatch(setRegister({ name: name, email: email, token: response.data.token }));
          // window.location.href = "http://localhost:5173/#contact";
          alert(response2.data.message);
          navigate('/');
        };
      }, 1000);

    } catch (error) {
      setVerify(false);
      setWait(false);
      setError(true);
      setErrorMsg(error.response.data.message);
      navigate('/signup');
      console.log("error", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            {wait ? (
              <div class="alert alert-secondary mt-2" role="alert">
                Still working, please wait...
              </div>
            ) : (
              null
            )}
            {send ? (
              <div class="alert alert-primary mt-2" role="alert">
                {message}
              </div>
            ) : (
              null
            )}
            {verify ? (
              <div class="alert alert-info mt-2" role="alert">
                {verifyMsg}
              </div>
            ) : (
              null
            )}
            {error ? (
              <div class="alert alert-danger mt-2" role="alert">
                {errorMsg}
              </div>
            ) : (
              null
            )}
            <Box sx={{ mt: 1 }}>
              <form onSubmit={submitForm}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  className="form-control"
                  id="name"
                  aria-describedby="inputGroupPrepend2"
                  label="Your Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  type="name"
                  value={name}
                  onChange={NAME}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  className="form-control"
                  id="email"
                  aria-describedby="inputGroupPrepend2"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  type="email"
                  value={email}
                  onChange={EMAIL}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="inputGroupPrepend2"
                  autoComplete="current-password"
                  value={password}
                  onChange={PASSWORD}
                />
                <Button
                  type="signin"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="/resetpass" variant="body2">
                      Forgot password
                    </Link>
                  </Grid>
                  <Grid item >
                    <span>Already have an account. </span>
                    <br />
                    <p className='text-right' style={{ marginLeft: "70%" }}>
                      <Link to="/signin" variant="body2">
                        Sign In
                      </Link>
                    </p>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
