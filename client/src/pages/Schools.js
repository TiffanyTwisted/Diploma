import MenuBar from '../components/Menu';
import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import SchoolList from '../components/SchoolList';

const SchoolPage = ( ) => {
        return (
            <Container>
              <Row className="mt-2">
                  <Col md={3}>
                      <MenuBar/>
                  </Col>
                  <Col md={9}>
                      <SchoolList/>
                  </Col>

              </Row>
            </Container>
        );

}

export default SchoolPage;