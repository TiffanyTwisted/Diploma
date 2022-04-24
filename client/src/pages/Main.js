import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuBar from '../components/Menu';

const MainPage = () => {
    return (<Container>
        <Row className='mt-3'>
            <Col md={3}>
                <MenuBar/>
            </Col>
            <Col md={9}>

            </Col>
        </Row>
    </Container>);
}

export default MainPage;