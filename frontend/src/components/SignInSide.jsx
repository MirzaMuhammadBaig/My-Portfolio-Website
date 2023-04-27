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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/reducers/apiSlice';
import { initialState } from '../redux/reducers/apiSlice';
import image from "../assets/ui-auth-bg.jpg";
import Copyright from './CopyRight';
import axios from 'axios';

<Copyright />

const theme = createTheme();

export default function SignInSide() {
  const [name, setName] = useState(initialState.name);
  const [email, setEmail] = useState(initialState.email);
  const [password, setPassword] = useState("");
  const [wait, setWait] = useState(false);
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const EMAIL = (e) => {
    setEmail(e.target.value);
  };
  const PASSWORD = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = async (data) => {

    data.preventDefault();

    setError(false);
    setSend(false);
    setWait(true);

    const obj = {
      email: email,
      password: password,
    };

    try {
      const response = await axios({
        method: "POST",
        url: "https://bwd-server-utgj.vercel.app/login",
        data: obj,
      });
      if (response.status) {
        setWait(false);
        setSend(true);
        setMessage(response.data.message);
        console.log("response", response);
        setName(response.data.user.name);
        dispatch(setLogin({ name: name, email: email, token: response.data.token }));
        alert(response.data.message);
        navigate('/');
      }

    } catch (error) {
      setSend(false);
      setWait(false);
      setError(true);
      setErrorMsg(error.response.data.error);
      navigate('/signin');
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
              Sign in
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
            {error ? (
              <div class="alert alert-danger mt-2" role="alert">
                error: {errorMsg}
              </div>
            ) : (
              null
            )}
            <Box component="form" noValidate onSubmit={submitForm} sx={{ mt: 1 }}>
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
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/resetpass" variant="body2">
                    Forgot password
                  </Link>
                </Grid>
                <Grid item>
                  <span>Don't have an account. </span>
                  <br/>
                  <p className='text-right' style={{ marginLeft: "63%" }}>
                  <Link to="/signup" variant="body2">
                    Sign Up
                  </Link>
                  </p>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
