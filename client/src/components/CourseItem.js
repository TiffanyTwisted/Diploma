import React from 'react';
import {Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {COURSE_ROUTE} from '../utills/constants';
import {Button} from "react-bootstrap"
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
  } from "reactstrap";

const CourseItem = ({course}) => {
    const history = useNavigate();
    return (
        <Col onClick={ () =>  history(COURSE_ROUTE + '/' + course.id)} >
            <Card style={
                    {
                        width: 350,
                        height:450, 
                        cursor: 'pointer',
                        borderRadius: 20
                    }
                }
                boreder={"light"}
                className='mt-3'>
                    { course.img ? 
                <CardImg width={250}
                    height={200}
                    src={
                        process.env.REACT_APP_API_URL + course.img
                    }/>
                    : 
                    <CardImg width={250}
                    height={200}
                    src='//demos.wrappixel.com/free-admin-templates/react/materialpro-react-free/main/static/media/user4.6ac95ef9.jpg'/> 
                }
                <CardBody className="p-4">
                    <CardTitle tag="h5">
                        {
                        course.course_name
                    }</CardTitle>
                    <CardText>{
                       course.course_description  > 160 ?  course.course_description .substring(0, 160)+ '...' : 
                       course.course_description 
                    } </CardText>
                    <Button variant="info">Читать дальше</Button>
                </CardBody>
            </Card>
        </Col>
    );

};

export default CourseItem;
