import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import MenuBar from '../components/Menu';
import {Context} from '../index';
import { fetchOneCourse } from '../http/courseApi';  
import {Button} from "react-bootstrap"
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
  } from "reactstrap";
  import {observer} from 'mobx-react-lite';
  import { createRecord } from '../http/recordAPI'; 

const CourseItemPage = observer( ( ) => {
 const {school} = useContext(Context)
 const {user}   = useContext(Context)
 const user_id = user.user.id
 const course_id = useParams()  // return course id from URL
 const [courseItem, setCourseItem] = useState({ })

 const addRecord = () =>{
    const formData = new FormData()
    console.log(user_id, Number( course_id.id ) )
    formData.append('UserId', user_id )
    formData.append('CourseId', course_id.id )
    createRecord(formData).then( data => console.log("Новая запись создалась"))
 }

    useEffect(()=>{
        fetchOneCourse( course_id.id ).then(data => setCourseItem(data))
    }, [])
    
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
                <CardImg 
                    height={200}
                    src={
                       process.env.REACT_APP_API_URL+ courseItem.img
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
                     <Button variant="info" onClick={addRecord}>Записаться на курс</Button>
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