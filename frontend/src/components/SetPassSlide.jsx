import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPass } from '../redux/reducers/apiSlice';
import { setLogout } from '../redux/reducers/apiSlice';
import { initialState } from '../redux/reducers/apiSlice';
import image from "../assets/ui-auth-bg.jpg";
import Copyright from './CopyRight';
import axios from 'axios';

<Copyright />

const theme = createTheme();

export default function ResetPassSlide() {

  const passtoken = useSelector((state) => state.auth.passtoken);
  const [password, setPassword] = useState("");
  const [wait, setWait] = useState(false);
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const PASSWORD = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = async (data) => {
    data.preventDefault();
    setError(false);
    setSend(false);
    setWait(true);
    const obj = {
      password: password,
    };

    try {

      if (passtoken === initialState.passtoken) {
        navigate('/resetpass');
      };

      const response = await axios({
        method: "POST",
        url: `https://bwd-server-utgj.vercel.app/reset-password/${passtoken}`,
        data: obj,
      });
      console.log("response", response);
      if (response.status) {
        dispatch(setPass({ passtoken: initialState.passtoken }));
        dispatch(setLogout());
        alert("You have successfully reset your password, now login yourself");
        setWait(false);
        setSend(true);
        setMessage(response.data);
        navigate("/signin");
      }
      console.log("response", response);

    } catch (error) {
      setSend(false);
      setWait(false);
      setError(true);
      setErrorMsg(error.response.data.status);
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
              Set Password
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
                {errorMsg}
              </div>
            ) : (
              null
            )}
            <Box component="form" noValidate onSubmit={submitForm} sx={{ mt: 1 }}>
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
                Set Password
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/signin" variant="body2">
                    Sign In
                  </Link>
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
