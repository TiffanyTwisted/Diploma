import React, {useState} from 'react';
import {Button} from "react-bootstrap"
import {Container} from 'react-bootstrap';
import CreateSchool from '../components/modals/CreateSchool.js';
import CreateEvent from '../components/modals/CreateEvent.js';
import CreateCourse from '../components/modals/CreateCourse.js';

const Admin = () => {
    const [schoolVisible, setSchoolVisible] = useState(false)
    const [eventVisible, setEventVisible]   = useState(false)
    const [courseVisible, setCourseVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
             className='mt-4 p-2'
             onClick={() => setSchoolVisible(true)}>
                Добавить школу
            </Button>
            <Button className='mt-4 p-2'
            onClick={() => setCourseVisible(true)}>
                Добавить курс
            </Button>
            <Button className='mt-4 p-2'
            onClick={() => setEventVisible(true)}>
                Добавить мероприятие
            </Button>
            <CreateSchool show={schoolVisible}
                onHide={
                    () => setSchoolVisible(false)
                }/>
            <CreateEvent show={eventVisible}
                onHide={
                    () => setEventVisible(false)
                }/>
            <CreateCourse show={courseVisible}
                onHide={
                    () => setCourseVisible(false)
                }/>
    
        </Container>
    );

}

export default Admin;
