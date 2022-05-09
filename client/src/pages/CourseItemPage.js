import React, {useContext, useEffect} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import MenuBar from '../components/Menu';
import {Context} from '../index';
import CourseList from '../components/CourseList';
import {Button} from "react-bootstrap"
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
  } from "reactstrap";
  import {observer} from 'mobx-react-lite';

const CourseItemPage = observer( ( ) => {
 const {school} = useContext(Context)
 const {user} = useContext(Context)
 const course_id = useParams()  // return course id from URL
 const courseItem = school.getCourseById(course_id.id)[ course_id.id-1 ] // always the first one

        return (
            <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <MenuBar/>
                </Col>
                <Col md={9}>
                 <Row>  <Card style={
                    {
                        cursor: 'pointer',
                        width: 850,
                        height: 400,
                        borderRadius: 20
                    }
                }
                boreder={"light"}
                className='mt-3'>
                  { courseItem.img  ?
                <CardImg width={250}
                    height={200}
                    src={
                        courseItem.img
                    }/> : 
                    <CardImg width={250}
                    height={200}
                    src='//demos.wrappixel.com/free-admin-templates/react/materialpro-react-free/main/static/media/user4.6ac95ef9.jpg'/> 
                }
                <CardBody className="p-4">
                    <CardTitle tag="h5">
                        {
                        courseItem.course_name
                    }</CardTitle>
                    <CardText>{
                        courseItem.course_description
                    }</CardText>
                     {
                      user.isAuth ? 
                     <Button variant="info">Записаться на курс</Button>
                     : 
                     <div></div> }
                </CardBody>
            </Card> </Row>   
                </Col>
            </Row>
        </Container>
        );

} ) 

export default CourseItemPage;