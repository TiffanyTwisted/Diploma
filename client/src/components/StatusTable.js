import React, {useContext, useState, useEffect} from 'react';
import {observer} from "mobx-react-lite"
import {Context} from '../index';
import {fetchRecordsByUserId} from '../http/recordAPI';
import Table from 'react-bootstrap/Table';
import {fetchCourses} from '../http/courseApi';
import {fetchSchools} from '../http/schoolApi';
import { NavLink } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { COURSE_ROUTE, SCHOOL_ROUTE } from '../utills/constants';

const StatusTable = observer(() => {
    const {school, user} = useContext(Context)
    const user_id = user.user.id
    const navigate = useNavigate()

    useEffect(() => {
        fetchRecordsByUserId(user_id).then(data => school.setRecords(data.rows))
    }, [])

    useEffect(() => {
        fetchCourses().then(data => school.setCourses(data.rows))
    }, [])

    useEffect(() => {
      fetchSchools().then(data => school.setSchool(data))
  }, [])
  console.log(school.schools)

    const recordsArray = school.records
    const schoolsArray = school.schools
    const coursesArray = school.courses
    let school_id 
   

    return (
      <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Название курса</th>
                    <th>Название школы</th>
                    <th>Статус заявки</th>
                </tr>
            </thead>
            <tbody> {
                recordsArray.map((record, index) => <tr>
                    <td>{
                        index + 1
                    }</td>
                    <td>{
                        coursesArray.map(item => {
                            if (item.id == record.CourseId) {
                                school_id = item.SchoolId
                                return item.course_name
                            }
                        })
                    }</td>
                    <td>{
                        schoolsArray.map(item => {
                            if (item.id == school_id) {
                                return item.school_name
                            } 
                        })
                    }</td>
                    <td> {
                        record.is_actived
                    }</td>
                </tr>)
            } </tbody>
        </Table>
           </>
    )
});

export default StatusTable;
