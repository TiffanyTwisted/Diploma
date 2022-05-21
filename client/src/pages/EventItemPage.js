import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import {Context} from '../index';
import MenuBar from '../components/Menu';
import { useLocation, useParams } from 'react-router-dom';
import { fetchOneEvent } from '../http/eventAPI'; 
import { Image } from 'react-bootstrap'; 
import {Button} from "react-bootstrap"
import {observer} from 'mobx-react-lite';
import CreateEventRecord from '../components/modals/CreateEventRecord';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
  } from "reactstrap";


const EventItemPage = observer(( ) => {
    const {school, user} = useContext(Context)
    const user_id = user.user.id
    const event_id = useParams()  // return course id from URL
    const [eventItem, setEventItem] = useState({ })
    const [recordVisible, setRecordVisible] = useState(false)
   
       useEffect(()=>{
           fetchOneEvent( event_id.id ).then(data => setEventItem(data))
       }, [])
        return (
            <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <MenuBar/>
                </Col>
                <Col md={9}>
                 <Row>  
                     <Card style={
                    {
                        cursor: 'pointer',
                        width: 850,
                        borderRadius: 20
                    }
                }
                boreder={"light"}
                className='mt-3'>
                <CardBody className="p-4">
                    <Row className="mt-3">
                        <Col>
                    <CardTitle tag="h3">
                        {
                        eventItem.event_name
                    }</CardTitle>
                    <CardText className='mt-2'>{
                        eventItem.event_description
                    }</CardText>
                     {
                      eventItem.is_registrated ? 
                     <Button variant="info" onClick={() => setRecordVisible(true)}>Записаться на мероприятие</Button>
                     : 
                     <div></div> }
                     </Col>
                     <Col className='d-flex justify-content-center'>
                     <Image width={300}
                          height={250}
                style={
                    {
                        borderRadius : 50
                    }
                }
                src={
                    process.env.REACT_APP_API_URL + eventItem.img
                } ></Image>
                     </Col>
                     </Row>
                </CardBody>
            </Card> 
            <CreateEventRecord show={recordVisible}
                        onHide={
                            () => setRecordVisible(false)
                        }
                        user_id={user_id}
                        event_id={
                            Number(event_id.id)
                        }/>
            </Row>   
                </Col>
            </Row>
        </Container>
        );

} )

export default EventItemPage;