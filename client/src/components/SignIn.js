import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Alert } from "@material-ui/lab";

import styles from "../styles/SignUpIn.css.js";
import axios from "axios";
import { Snackbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utills/constants.js";
import { login } from "../http/userAPI.js";

export default function SignIn(props) {

  let history = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChange = (e) => {
    switch (e.target.type) {
      case "text":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const click = async() => {
    const response = await login(email, password);
    console.log({response})
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={styles.container}>
        <Avatar style={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Авторизация
        </Typography>
        <form style={styles.form} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={styles.submit}
            onClick = {click}
          >
            Вход
          </Button >
          <Grid container justify="flex-end">
            <Grid item>
              <div  variant="body2">
                У вас нет аккаунта?  <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink> 
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={props.openMessage}
        autoHideDuration={6000}
        onClose={props.handleCloseMessage}
      >
        <Alert severity={props.severity} onClose={props.handleCloseMessage}>
          {props.messageText}
        </Alert>
      </Snackbar>
    </Container>
  );
}