import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import MenuBar from '../components/Menu';


const SchoolItemPage = ( ) => {
        return (
            <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <MenuBar/>
                </Col>
                <Col md={9}>
                    
    
                </Col>
            </Row>
        </Container>
        );

}

export default SchoolItemPage;