import React, { useContext,  useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { fetchEvents } from '../http/eventAPI';
import {Context} from '../index';
import EventItem from './EventItem'
import {observer} from "mobx-react-lite";

const EventsList = observer(  () => {
    const {school} = useContext(Context)
    useEffect(() => {
        fetchEvents().then(data => school.setEvents(data.rows))
    }, [])

    return (
        <Row className="d-flex" >
            {school.events.map(event => 
                <EventItem key={event.id} event={event} />)}
        </Row>
    );
} )

export default EventsList;