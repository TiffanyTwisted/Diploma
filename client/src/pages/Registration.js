import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from "react-bootstrap/Card"
import SignUp from '../components/SignUp';

const Registration = ( ) => {
        return (
            <Container
             className="d-flex justify-content-center align-items-center"
             style={{height: window.innerHeight- 54}}>
                <Card style={{width:600}} className="p-5">
                   <SignUp/>
                </Card>
            </Container>
        )
}

export default Registration;