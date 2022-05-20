import React, {useContext, useEffect, useState} from 'react';
import {Row} from 'react-bootstrap';
import {Context} from '../index';
import CourseItem from './CourseItem'
import {fetchCourses} from '../http/courseApi';

const CourseList = (school_id) => {
    const {school} = useContext(Context)

    useEffect(() => {
        fetchCourses().then(data => school.setCourses(data.rows))
    }, [])

    const courses = school.courses.map(item => {
        if (item.SchoolId == school_id.school_id.id) {
            return item
        }
    }).filter(element => {
        return element !== undefined} )

    return (<Row className="d-flex"> {
        courses.map(course => 
        <CourseItem key={ course.id } course={course}/>)
    } </Row>);
};

export default CourseList;
