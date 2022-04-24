import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import MenuBar from '../components/Menu';


const EventItemPage = ( ) => {
        return (
            <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <MenuBar/>
                </Col>
                <Col md={9}>
                    Event Item
                </Col>
            </Row>
        </Container>
        );

}

export default EventItemPage;