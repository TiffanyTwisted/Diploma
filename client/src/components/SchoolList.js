import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import {Context} from '../index';
import SchoolItem from './SchoolItem'

const SchoolList = () => {
    const {school} = useContext(Context)
    return (
        <Row className="d-flex" >
            {school.schools.map(school => 
                <SchoolItem key={school.id} school={school} />)}
        </Row>
    );
};

export default SchoolList;