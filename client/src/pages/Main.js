import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuBar from '../components/Menu';
import {observer} from 'mobx-react-lite';
import NewsList from '../components/NewsList';

const MainPage = observer ( () => {
    return (<Container>
        <Row className='mt-3'>
            <Col md={3}>
                <MenuBar/>
            </Col>
            <Col md={9}>
                <h2 className='mt-3'>Новости портала</h2>
                <NewsList/>
            </Col>
        </Row>
    </Container>);
} ) 

export default MainPage;
