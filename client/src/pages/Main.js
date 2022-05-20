import React from 'react';
import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuBar from '../components/Menu';
import {observer} from 'mobx-react-lite';
import InfoComponent from '../components/InfoComponent';

const MainPage = observer ( () => {
    return (<Container>
        <Row className='mt-3'>
            <Col md={3}>
                <MenuBar/>
            </Col>
            <Col md={9}>
                <InfoComponent/>
            </Col>
        </Row>
    </Container>);
} ) 

export default MainPage;
