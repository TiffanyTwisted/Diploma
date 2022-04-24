import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import {Context} from '../index';
import EventItem from './EventItem'

const EventsList = () => {
    const {school} = useContext(Context)
    return (
        <Row className="d-flex" >
            {school.events.map(event => 
                <EventItem key={event.id} event={event} />)}
        </Row>
    );
};

export default EventsList;