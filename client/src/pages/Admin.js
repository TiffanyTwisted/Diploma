import React, {useState, useEffect, useContext} from 'react';
import {Button} from "react-bootstrap"
import {Container} from 'react-bootstrap';
import CreateSchool from '../components/modals/CreateSchool.js';
import CreateEvent from '../components/modals/CreateEvent.js';
import CreateCourse from '../components/modals/CreateCourse.js';
import UpdateRecord from '../components/modals/UpdateRecord.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {observer} from "mobx-react-lite"
import {Context} from '../index';
import {fetchAllRecords} from '../http/recordAPI';
import Table from 'react-bootstrap/Table';
import {fetchCourses} from '../http/courseApi';
import {fetchSchools} from '../http/schoolApi';
import { NavLink } from 'react-bootstrap';

const Admin = observer( () => {
    const [schoolVisible, setSchoolVisible] = useState(false)
    const [eventVisible, setEventVisible]   = useState(false)
    const [courseVisible, setCourseVisible] = useState(false)
    const [recordVisible, setRecordVisible] = useState(false)
    const [biblioVisible, setBiblioVisible] = useState(false)

    const {school, user} = useContext(Context)
    const user_id = user.user.id

    useEffect(() => {
        fetchAllRecords().then(data => school.setRecords(data.rows))
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
        <Container className="d-flex flex-column">
            <Row className="d-flex align-items-center mt-4">
            <h4>Работа со школами</h4>    
            <Col className="d-flex align-items-center">
            <Button
             className='mt-4 p-2'
             onClick={() => setSchoolVisible(true)}
             variant='success'>
                Добавить школу
            </Button>
            </Col>
            <Col><Button className='mt-4 p-2'> Обновить школу </Button></Col>
            <Col><Button className='mt-4 p-2' variant='danger'> Удалить школу </Button></Col>
            </Row>
            <Row className="d-flex align-items-center mt-4">
            <h4>Работа с курсами</h4>    
            <Col className="d-flex align-items-center">
            <Button className='mt-4 p-2'
             variant='success'
            onClick={() => setCourseVisible(true)}>
                Добавить курс
            </Button>
            </Col>
            <Col><Button className='mt-4 p-2'> Обновить курс </Button></Col>
            <Col><Button className='mt-4 p-2' variant='danger'> Удалить курс </Button></Col>
            </Row>
            <Row className="d-flex align-items-center mt-4">
            <h4>Работа с мероприятиями</h4>    
            <Col className="d-flex align-items-center">
            <Button className='mt-4 p-2'
             variant='success'
            onClick={() => setEventVisible(true)}>
                Добавить мероприятие
            </Button>
            </Col>
            <Col><Button className='mt-4 p-2'> Обновить мероприятие </Button></Col>
            <Col><Button className='mt-4 p-2'  variant='danger'> Удалить мероприятие </Button></Col>
            </Row>
            <Row className="d-flex align-items-center mt-4">
            <h4>Загрузка файлов для библиотеки</h4>    
            <Col className="d-flex align-items-center">
            <Button className='mt-4 p-2'
             variant='success'
            onClick={() => setEventVisible(true)}>
                Загрузить файл
            </Button>
            </Col>
            <Col><Button className='mt-4 p-2'> Обновить файл </Button></Col>
            <Col><Button className='mt-4 p-2'  variant='danger'> Удалить файл </Button></Col>
            </Row>
            <Row className="d-flex align-items-center mt-4">
            <h4>Работа с заявками</h4>    
            <Table striped bordered hover className='mt-4'>
            <thead>
                <tr>
                    <th></th>
                    <th>Название курса</th>
                    <th>Название школы</th>
                    <th>ID школьника</th>
                    <th>Статус заявки</th>
                    <th></th>

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
                     <td>{
                         record.UserId
                    }</td>
                    <td> {
                        record.is_actived
                    }</td>
                     <td>         
                       <Button key={index} className='mt-4 p-2' onClick={() => {   setRecordVisible(true)}} >Выбрать</Button> 
                    </td>
                    <UpdateRecord show={recordVisible}
                onHide={
                    () => setRecordVisible(false)
                }
                index={index}/>
                </tr>)
                
            } </tbody>
        </Table>
            </Row>
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

} )

export default Admin;
