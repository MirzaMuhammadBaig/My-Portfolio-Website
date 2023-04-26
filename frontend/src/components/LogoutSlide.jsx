import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLogout } from "../redux/reducers/apiSlice";
import { initialState } from "../redux/reducers/apiSlice";
import image from "../assets/ui-auth-bg.jpg";
import Copyright from "./CopyRight";

<Copyright />;

const theme = createTheme();

export default function LogoutSlide() {
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const token = useSelector((state) => state.auth.token);

  const [wait, setWait] = useState(false);
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = async (e) => {
    e.preventDefault();
    setError(false);
    setWait(true);
    try {
      if (
        name === initialState.name ||
        email === initialState.email ||
        token === initialState.token
      ) {
        alert("You can't logout yourself, because you are not login");
        navigate("/signin");
      } else {
        const response = dispatch(setLogout());
        console.log("response", response);
        setMessage("Logout Successfully");
        setWait(false);
        setSend(true);
        alert("Logout Successfully");
        navigate("/");
      }
    } catch (error) {
      navigate("/logout");
      setWait(false);
      setError(true);
      setErrorMsg(error);
      console.log("error", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            {wait ? (
              <div class="alert alert-secondary mt-2" role="alert">
                Still working, please wait...
              </div>
            ) : null}
            {send ? (
              <div class="alert alert-primary mt-2" role="alert">
                {message}
              </div>
            ) : null}
            {error ? (
              <div class="alert alert-danger mt-2" role="alert">
                {errorMsg}
              </div>
            ) : null}
            <Typography component="h1" variant="h5">
              Logout
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={submitForm}
              sx={{ mt: 1 }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Logout
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
