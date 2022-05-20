import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import MenuBar from '../components/Menu';
import {Context} from '../index';
import CourseList from '../components/CourseList';
import {observer} from "mobx-react-lite"
import { fetchOneSchool } from '../http/schoolApi';   
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
  } from "reactstrap";

const SchoolItemPage = observer( ( ) => {
    const [schoolItem, setSchoolItem] = useState({ })
    const {school} = useContext(Context)
    const school_id = useParams()  // return school id from URL

    useEffect(()=>{
        fetchOneSchool( school_id.id ).then(data => setSchoolItem(data))
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
                <CardBody className="p-4">
                    <CardTitle tag="h5">
                        {
                        schoolItem.school_name
                    }</CardTitle>
                    <CardText>{
                        schoolItem.school_description
                    }</CardText>
                </CardBody>
            </Card> </Row>  
            <h4 className='mt-4'>Предлагаемые курсы</h4>     
                 <Row> <CourseList school_id={school_id} /></Row>
                </Col>
            </Row>
        </Container>
        );

} ) 

export default SchoolItemPage;

/*     { schoolItem.img  ?
                <CardImg width={250}
                    height={200}
                    src={
                       process.env.REACT_APP_API_URL + schoolItem.img
                    }/> : 
                    <CardImg width={250}
                    height={200}
                    src='//demos.wrappixel.com/free-admin-templates/react/materialpro-react-free/main/static/media/user4.6ac95ef9.jpg'/> 
                }*/ 