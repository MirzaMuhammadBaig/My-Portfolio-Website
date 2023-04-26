import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { setPass } from '../redux/reducers/apiSlice';
import image from "../assets/ui-auth-bg.jpg";
import Copyright from './CopyRight';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

<Copyright />

const theme = createTheme();

export default function ResetPassSlide() {

  const [email, setEmail] = useState("");
  const [wait, setWait] = useState(false);
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);
  const [verify, setVerify] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");
  const [verifyMsg, setVerifyMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const EMAIL = (e) => {
    setEmail(e.target.value);
  };

  const submitForm = async (data) => {
    data.preventDefault();
    setError(false);
    setSend(false);
    setWait(true);
    const obj = {
      email: email,
    };

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:5000/forgot-password",
        data: obj,
      });
      if (response.status) {
        setVerify(false);
        setWait(false);
        setSend(true);
        setMessage(response.data.message);
      }
      console.log("response", response);

      const id = response.data.user._id;

      const intervalId = setInterval(async () => {
        const response2 = await axios({
          method: "GET",
          url: `http://localhost:5000/isverify/${id}`,
        });
        console.log("response2", response2.data);
        if (response2.data.user.is_allowed_for_reset_pass === true) {
          dispatch(setPass({ passtoken: response2.data.user.resetPasswordToken }));
          setVerifyMsg(response2.data.message);
          setSend(false);
          setVerify(true);
          clearInterval(intervalId);
          navigate('/resetpass/set-pass');
          alert(response2.data.message);
        };
      }, 1000);

    } catch (error) {
      setVerify(false);
      setWait(false);
      setError(true);
      setErrorMsg(error.response.data.message);
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
              Reset Password
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}