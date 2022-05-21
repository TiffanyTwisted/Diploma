import React, {useContext, useState, useEffect} from 'react';
import {observer} from "mobx-react-lite"
import {Context} from '../index';
import {fetchRecordsByUserId} from '../http/eventRecordAPI';
import Table from 'react-bootstrap/Table';
import {fetchSchools} from '../http/schoolApi';
import { NavLink } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { COURSE_ROUTE, SCHOOL_ROUTE } from '../utills/constants';
import { fetchEvents } from '../http/eventAPI';

const EventStatusTable = observer(() => {
    const {school, user} = useContext(Context)
    const user_id = user.user.id
    const navigate = useNavigate()

    useEffect(() => {
        fetchRecordsByUserId(user_id).then(data => school.setEventRecords(data.rows))
    }, [])

    useEffect(() => {
        fetchEvents().then(data => school.setEvents(data.rows))
    }, [])

    useEffect(() => {
      fetchSchools().then(data => school.setSchool(data))
  }, [])

    const recordsArray = school.eventrecords
    const eventsArray = school.events
   

    return (
      <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Название мероприятия</th>
                    <th>Статус заявки</th>
                </tr>
            </thead>
            <tbody> {
                recordsArray.map((record, index) => <tr>
                    <td>{
                        index + 1
                    }</td>
                    <td>{
                        eventsArray.map(item => {
                            if (item.id == record.EventId) {
                                return item.event_name
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

export default EventStatusTable;
