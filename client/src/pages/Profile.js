import React from 'react';
import {Card, Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuBar from '../components/Menu';
import ProfileDetail from '../components/ProfileDetail'

const ProfilePage = () => {
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <MenuBar/>
                </Col>
                <Col md={9}>
                    <ProfileDetail/>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfilePage;
