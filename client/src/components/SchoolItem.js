import React from 'react';
import {Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {useNavigate} from 'react-router-dom';
import {SCHOOL_ROUTE} from '../utills/constants';
import {Button} from "react-bootstrap"
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
  } from "reactstrap";

const SchoolItem = ({school}) => {
    const history = useNavigate();
    return (
        <Col 
            onClick={
                () => history(SCHOOL_ROUTE + '/' + school.id)
        }>
            <Card style={
                    {
                        width: 350,
                        cursor: 'pointer',
                        height: 400,
                        borderRadius: 20
                    }
                }
                boreder={"light"}
                className='mt-3'>
                <CardImg width={250}
                    height={200}
                    src={
                        school.img
                    }/>
                <CardBody className="p-4">
                    <CardTitle tag="h5">
                        {
                        school.school_name
                    }</CardTitle>
                    <CardText>{
                        school.school_description
                    }</CardText>
                    <Button variant="info">Читать дальше</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default SchoolItem;
