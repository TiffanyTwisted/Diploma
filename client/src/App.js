import React, {useState, useEffect, useContext} from "react";
import './App.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import NavBar from "./pages/NavBar"
import AppRouter from "./routers/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from ".";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }). finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <Router>
            <NavBar/>
            <AppRouter/>
        </Router>
    );
})

export default App;
