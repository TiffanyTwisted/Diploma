import MenuBar from '../components/Menu';
import React, { useContext, useEffect } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import SchoolList from '../components/SchoolList';
import {Context} from '../index';
import { fetchSchools } from '../http/schoolApi';   
import {observer} from "mobx-react-lite";

const SchoolPage = observer(( ) => {
    const {school} = useContext(Context)
    useEffect(()=>{
        fetchSchools( ).then(data => school.setSchool(data))
    }, [])
        return (
            <Container>
              <Row className="mt-3">
                  <Col md={3}>
                      <MenuBar/>
                  </Col>
                  <Col md={9}>
                  <h2 className='mt-3'>Школы Юных БГУ</h2>
                      <SchoolList/>
                  </Col>

              </Row>
            </Container>
        );

} )

export default SchoolPage;