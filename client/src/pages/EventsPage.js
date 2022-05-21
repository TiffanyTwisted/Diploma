import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuBar from '../components/Menu';
import EventsList from '../components/EventsList';

const EventsPage = () => {
    return (<Container>
        <Row className='mt-3'>
            <Col md={3}>
                <MenuBar/>
            </Col>
            <Col md={9}>
            <h2 className='mt-3'>Мероприятия БГУ</h2>
                <EventsList/>
            </Col>
        </Row>
    </Container>);
}

export default EventsPage;
