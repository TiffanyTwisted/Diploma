import React from 'react';
import {Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { EVENT_ROUTE} from '../utills/constants';
import {Button} from "react-bootstrap"
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from "reactstrap";

const EventItem = ({event}) => {
    const history = useNavigate();
    return (
        <Col md={6} onClick={()=> history(EVENT_ROUTE + '/' + event.id)}>
            <Card style={
                    {
                        width: 350,
                        cursor: 'pointer'
                    }
                }
                boreder={"light"}
                className='mt-3'>
         <CardImg width={250}
                height={200}
                src={
                    process.env.REACT_APP_API_URL + event.img
                }/>
            <CardBody className="p-4">
                <CardTitle tag="h5"> {
                   event.event_name
                }</CardTitle>
                <CardText> {
                    event.event_description.length > 120 ? event.event_description.substring(0, 120) + '...' : event.event_description
                }</CardText>
                <Button variant="info"
                    onClick={
                        () => history(EVENT_ROUTE + '/' + event.id)
                }>Читать дальше</Button>
            </CardBody>
            </Card>
        </Col>
    );
};

export default EventItem;
