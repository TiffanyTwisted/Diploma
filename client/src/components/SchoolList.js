import React, {useContext, useEffect} from 'react';
import {Row} from 'react-bootstrap';
import {Context} from '../index';
import SchoolItem from './SchoolItem';
import {fetchSchools} from '../http/schoolApi';

const SchoolList = () => {
    const {school} = useContext(Context)
    useEffect(() => {
        fetchSchools().then(data => school.setSchool(data))
    }, [])
    console.log(school)
    return (<Row className="d-flex"> {
        school.schools.map(school => <SchoolItem key={
                school.id
            }
            school={school}/>)
    } </Row>);
};

export default SchoolList;
