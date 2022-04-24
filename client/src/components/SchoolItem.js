import React from 'react';
import {Col, Card} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { SCHOOL_ROUTE } from '../utills/constants';

const SchoolItem = ({school}) => {
    const history = useNavigate();
    return (
        <Col md={6} onClick={()=> history(SCHOOL_ROUTE + '/' + school.id)}>
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
                        school.img
                    }/>
                <div>{school.school_name}</div>
                <div>{school.school_description}</div>
            </Card>
        </Col>
    );
};

export default SchoolItem;
