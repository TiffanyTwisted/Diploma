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
    const [first_name, setFirstName ] = useState();
    const [middle_name, setMiddleName ] = useState();
    const [last_name, setLastName ] = useState();
    const [showHide, show] = useState(false)
    let error_text;

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
                console.log(data)
            } else {
                data = await registration(email, password, first_name, middle_name, last_name)
                console.log(data)
            }
            console.log(user)
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (error) {
            error_text = error.response.data.message
            show(true)
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
                    {width: 600,
                     borderRadius: 20 }
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
                        isLogin ? 'Войти' : 'Регистрация'
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
                        }
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                click()
                            }
                          }}
                          ></Form.Control>
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
                            <Form.Control className='mt-3' placeholder="Имя"
                              value={first_name}
                              onChange={
                                  e => setFirstName(e.target.value) }></Form.Control>
                            <Form.Control className='mt-3' placeholder="Отчество"
                             value={middle_name}
                             onChange={
                                 e => setMiddleName(e.target.value) }></Form.Control>
                            <Form.Control className='mt-3' placeholder="Фамилия"
                             value={last_name}
                             onChange={
                                 e => setLastName(e.target.value) }></Form.Control>
                        </div>
                        {  showHide  ? <p className='text-danger'>Ошибка</p> : <></>  }
                    </>
                } </Form>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                    {
                    isLogin ? <div>
                        У вас нет аккаунта?
                        <NavLink to={REGISTRATION_ROUTE} className="text-decoration-none">
                            Зарегистрируйтесь</NavLink>
                    </div> : <div>
                        Есть аккаунт?
                        <NavLink to={LOGIN_ROUTE} className="text-decoration-none pl-3">Войдите</NavLink>
                    </div>
                }
                    <Button type="submit"
                        variant={"outline-success"}
                        className="mt-2"
                        onClick={click}
                        color="primary">
                        Далее
                    </Button>
                </div>
            </Card>
        </Container>
    )
})

export default Auth;
