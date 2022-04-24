import React, {useContext} from 'react';
import {Context} from '..';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom";
import {MAIN_ROUTE, EVENT_ROUTE, ADMIN_ROUTE} from '../utills/constants'
import {Button} from "react-bootstrap"
import styles from "../styles/NavBar.css"
import { useNavigate } from 'react-router-dom';

const NavBarPanel = () => {
    const {user} = useContext(Context)
    const history = useNavigate()
    return (
    <Navbar bg="#5c6bc0" variant="dark" style={styles.navbar}>
        <NavLink style={styles.title} to={MAIN_ROUTE} className="text-decoration-none" ><h3>Образовательный портал</h3></NavLink>
        { user.isAuth ?
         <Nav className="me-auto" >
            <Button  variant={"outline-light"}>
                <NavLink to={EVENT_ROUTE} className="text-decoration-none" style={ styles.menuItem } >Мероприятия БГУ</NavLink>
            </Button>
            <Button style={ styles.menuItem } variant={"outline-light"} 
            onClick={()=> history(ADMIN_ROUTE)}
            >Админ панель</Button>
            <Button style={ styles.menuItem } variant={"outline-light"}>Выйти</Button>
        </Nav> :
        <Nav className="me-auto" style={ {color: 'white'} }>
            <Button style={ styles.menuItem } variant={"outline-light"}>Зарегистрироваться</Button>
        </Nav>}
    </Navbar>)
}

export default NavBarPanel
