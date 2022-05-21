import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import MenuBar from '../components/Menu';
import {Context} from '../index';
import {Button} from "react-bootstrap"
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
  } from "reactstrap";
  import {observer} from 'mobx-react-lite';
import RecordTable from './../components/RecordTable';

const RecordManagement = observer( ( ) => {
        return (
            <Container>
        <Row className='mt-3'>
            <Col md={3}>
                <MenuBar/>
            </Col>
            <Col md={9}>
            <Card className='mt-3 p-3'>
            <h4 className='mt-3'>Админ панель обработки заявлений</h4>
            <RecordTable className='mt-3' />
        </Card>
            </Col>
        </Row>
        </Container>
        );

} ) 

export default RecordManagement;