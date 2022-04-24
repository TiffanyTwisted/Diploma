import React from 'react';
import {Col, Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { EVENT_ROUTE} from '../utills/constants';

const EventItem = ({event}) => {
    const history = useNavigate();
    return (
        <Col md={6} onClick={()=> history(EVENT_ROUTE + '/' + event.id)}>
            <Card style={
                    {
                        width: 350,
                        cursor: 'pointer',
                        height: 250
                    }
                }
                boreder={"light"}
                className='mt-3'>
                <Image width={250}
                    height={200}
                    src={
                        event.img
                    }/>
                <div>{event.event_name}</div>
                <div>{event.event_description}</div>
            </Card>
        </Col>
    );
};

export default EventItem;
