import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { useLocation, useParams, Link } from 'react-router-dom';
import MenuBar from '../components/Menu';
import {Context} from '../index';
import CourseList from '../components/CourseList';
import { Image } from 'react-bootstrap'; 
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
    let linkItem 

    useEffect(()=>{
        fetchOneSchool( school_id.id ).then(data => setSchoolItem(data))
    }, [])

    linkItem = String( schoolItem.link ) 
    
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
                    <CardTitle tag="h5">
                        {
                        schoolItem.school_name
                    }</CardTitle>
                    <CardText>{
                        schoolItem.school_description
                    }</CardText>
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
                    process.env.REACT_APP_API_URL + schoolItem.img
                } ></Image>
                    </Col>
                    <Row className='mt-2'>
                       {
                           schoolItem.phone ? <div><b>Телефон: </b>{schoolItem.phone}</div> : <></>
                       }
                    </Row>
                    <Row className='mt-2'>
                       {
                           schoolItem.link ? <div><b>Email: </b><a href={linkItem}>{linkItem}</a></div> : <></>
                       }
                    </Row>
                    </Row>
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