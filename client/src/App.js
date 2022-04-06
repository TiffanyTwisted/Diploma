import React,{useState, useEffect} from "react";
import Navbar from './components/NavBar'
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import School from "./components/School";
import Events_BSU from "./components/Events_BSU";
import './App.css';
import { Routes, Route,BrowserRouter as Router } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="https://material-ui.com/">
        Образовательный портал "Школа Юных БГУ"
      </Link>
      {"."}
    </Typography>
  );
}

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
            <Route path='/events' element={<Events_BSU/>} />
            <Route path='/' element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/schools' element={<School/>} />
        </Routes>
        <Box pt={4}>
          <Copyright />
        </Box>
      </div>
    </Router>
  );
}

export default App;
