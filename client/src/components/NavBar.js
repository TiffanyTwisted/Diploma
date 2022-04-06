import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import styles from "../styles/NavBar.css";
import { Link, Divider } from '@material-ui/core';

export default function NavBar(props) {
  const handleLogOut = () => {
    localStorage.clear();
  };
  return (
    <AppBar position="static" style={styles.navbar}>
      <Toolbar style={styles.navbar}>
        <IconButton
          edge="start"
          style={styles.menuButton}
          color="inherit"
          aria-label="menu"
        ></IconButton>
        <Typography variant="h6" style={styles.title}>
          Образовательный портал "Школа Юных БГУ"
        </Typography>
        <Link href="http://localhost:3000/events" style={styles.menuItem} variant="h7">
          Мероприятия БГУ
        </Link>
        <Divider orientation="vertical" flexItem color="textSecondary">
        </Divider>
        <Link href="http://localhost:3000/schools" style={styles.menuItem} variant="h7">
          Школы Юных БГУ
        </Link>

        {props.isLogin ? (
          <div>
            <Typography variant="h6" style={styles.menuButton}>
              <Button href="/" onClick={handleLogOut} style={styles.menuButton}>
                Выйти
              </Button>
            </Typography>
          </div>
        ) : ("")}
      </Toolbar>
    </AppBar>
  );
}