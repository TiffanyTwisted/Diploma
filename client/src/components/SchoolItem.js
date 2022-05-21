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
    CardTitle
} from "reactstrap";

const SchoolItem = ({school}) => {
    const history = useNavigate();
    return (<Col>
        <Card style={
                {
                    cursor: 'pointer',
                    width: 350,
                    height: 500,
                    borderRadius: 20
                }
            }
            border={"light"}
            className='mt-3'>
            <CardImg width={250}
                height={200}
                src={
                    process.env.REACT_APP_API_URL + school.img
                }/>
            <CardBody className="p-4">
                <CardTitle tag="h5"> {
                    school.school_name
                }</CardTitle>
                <CardText> {
                    school.school_description.length > 160 ? school.school_description.substring(0, 160) + '...' : school.school_description
                }</CardText>
                <Button variant="info"
                    onClick={
                        () => history(SCHOOL_ROUTE + '/' + school.id)
                }>Читать дальше</Button>
            </CardBody>
        </Card>
    </Col>);
};

export default SchoolItem;
