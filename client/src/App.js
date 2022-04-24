import React,{useState, useEffect} from "react";
import './App.css';
import { Routes, Route,BrowserRouter as Router } from "react-router-dom";
import NavBar from "./pages/NavBar"
import AppRouter from "./routers/AppRouter";


const App = ( ) => {

  return (
    <Router>
      <NavBar/>
      <AppRouter/>
    </Router>
  );
}

export default App;
