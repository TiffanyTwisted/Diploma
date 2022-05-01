import React, { useState } from "react";
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

import styles from "../styles/SignUpIn.css.js";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utills/constants.js";
import { registration } from "../http/userAPI.js";

export default function SignUp() {
  let history = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCpassword] = useState();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mname, setMname] = useState("");

  const onChange = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "cpassword":
        setCpassword(e.target.value);
        break;
      case "firstName":
        setFname(e.target.value);
        break;
      case "lastName":
        setLname(e.target.value);
        break;
      case "middleName":
        setMname(e.target.value);
        break;
      default:
        break;
    }
  };

  const click = async() => {
    const response = await registration(email, password, fname, mname, lname, cpassword);
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
          Регистрация
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
                value={email}
                onChange={onChange}
                autoComplete="email"
                inputProps={{ maxLength: 40 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                onChange={onChange}
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                inputProps={{ maxLength: 30 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                label="Confirm password"
                type="password"
                onChange={onChange}
                id="cpassword"
                value={cpassword}
                autoComplete="current-password"
                inputProps={{ maxLength: 30 }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                value={fname}
                onChange={onChange}
                label="First name"
                autoFocus
                inputProps={{ maxLength: 15 }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                fullWidth
                id="middleName"
                label="Middle name"
                name="middleName"
                onChange={onChange}
                autoComplete="mname"
                value={mname}
                inputProps={{ maxLength: 15 }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last name"
                name="lastName"
                autoComplete="lname"
                value={lname}
                onChange={onChange}
                inputProps={{ maxLength: 15 }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={styles.submit}
            onClick={click}
          >
            Зарегистрировать
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
               Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизация</NavLink>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}