import React, {useContext} from 'react';
import {Context} from '..';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import {NavLink, useLocation} from "react-router-dom";
import {MAIN_ROUTE, PROFILE_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utills/constants'
import {Button} from "react-bootstrap"
import styles from "../styles/NavBar.css"
import {useNavigate} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import { Icon } from '@material-ui/core';

const NavBarPanel = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const currentLocation = location.pathname

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        console.log(user)
    }

    return (
        <Navbar bg="#5c6bc0" variant="dark"
            style={
                styles.navbar
        }>
            <NavLink style={
                    styles.title
                }
                to={MAIN_ROUTE}
                className="text-decoration-none">
                <div style={
                    styles.header
                }>
                    <Icon src=''></Icon><h5 className='ml-50'>Образовательный портал Школа Юных БГУ</h5>
                </div>
            </NavLink>
            {
            user.isAuth ? <Nav className="me-auto">

                <Button variant={"outline-info"}>
                    <NavLink to={PROFILE_ROUTE}
                        className="text-decoration-none"
                        style={
                            styles.menuItem
                    }>Личный кабинет</NavLink>
                </Button>


                <Button style={
                        styles.menuItem
                    }
                    variant={"outline-info"}
                    onClick={
                        () => navigate(ADMIN_ROUTE)
                }>Админ панель</Button>
                <Button style={
                        styles.menuItem
                    }
                    variant={"outline-info"}
                    onClick={
                        () => logOut()
                }>Выйти</Button>
            </Nav> : 
            currentLocation === LOGIN_ROUTE ?
            <Nav className="me-auto">
                <Button style={
                        styles.menuItem
                    }
                    onClick={
                        () => navigate(REGISTRATION_ROUTE)
                    }
                    variant={"outline-info"}>Зарегистрироваться</Button>
            </Nav> : 
                <Nav className="me-auto">
                <Button style={
                        styles.menuItem
                    }
                    onClick={
                        () => navigate(LOGIN_ROUTE)
                    }
                    variant={"outline-info"}>Войти</Button>
            </Nav>
        } </Navbar>
    )
})

export default NavBarPanel
