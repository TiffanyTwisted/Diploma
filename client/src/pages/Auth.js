import React, {useContext, useState} from 'react';
import {Container, Form, Row} from 'react-bootstrap';
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {NavLink, useLocation} from "react-router-dom";
import {REGISTRATION_ROUTE, LOGIN_ROUTE, MAIN_ROUTE} from "../utills/constants.js";
import {registration, login} from '../http/userAPI'
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import styles from "../styles/SignUpIn.css.js";
import {observer} from "mobx-react-lite";
import {Context} from '../index.js';
import { useNavigate } from 'react-router-dom';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate() // Need to navigate to another link
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
                console.log(data)
            } else {
                data = await registration(email, password)
                console.log(data)
            }
            console.log(user)
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }


    }
    return (
        <Container className="d-flex justify-content-center align-items-center"
            style={
                {
                    height: window.innerHeight - 54
                }
        }>
            <Card style={
                    {width: 600}
                }
                className="p-5">
                <div className='d-flex flex-column align-items-center'>
                    <Avatar style={
                        styles.avatar
                    }>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <h2 className="m-auto">
                        {
                        isLogin ? 'Авторизация' : 'Регистрация'
                    }</h2>
                </div>
                <Form className='d-flex flex-column'>
                    {
                    isLogin ? <>
                        <Form.Control className='mt-3' placeholder="Email address"
                            value={email}
                            onChange={
                                e => setEmail(e.target.value)
                        }></Form.Control>
                        <Form.Control className='mt-3' placeholder="Password"
                            value={password}
                            type='password'
                            onChange={
                                e => setPassword(e.target.value)
                        }></Form.Control>
                    </> : <>
                        <Form.Control className='mt-3' placeholder="Email address"
                            value={email}
                            onChange={
                                e => setEmail(e.target.value)
                        }></Form.Control>
                        <Form.Control className='mt-3' placeholder="Password"
                            value={password}
                            type='password'
                            onChange={
                                e => setPassword(e.target.value)
                        }></Form.Control>
                        <div className='d-flex justify-content-around'>
                            <Form.Control className='mt-3' placeholder="First Name"></Form.Control>
                            <Form.Control className='mt-3' placeholder="Middle Name"></Form.Control>
                            <Form.Control className='mt-3' placeholder="Last Name"></Form.Control>
                        </div>
                    </>
                } </Form>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                    {
                    isLogin ? <div>
                        У вас нет аккаунта?
                        <NavLink to={REGISTRATION_ROUTE}>
                            Зарегистрируйтесь</NavLink>
                    </div> : <div>
                        Есть аккаунт?
                        <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                    </div>
                }
                    <Button type="submit"
                        variant={"outline-success"}
                        className="mt-2"
                        onClick={click}
                        color="primary">
                        Вход
                    </Button>
                </div>
            </Card>
        </Container>
    )
})

export default Auth;
