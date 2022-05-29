import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button} from "react-bootstrap"
import {Container} from 'react-bootstrap';
import CreateSchool from '../components/modals/CreateSchool.js';
import CreateEvent from '../components/modals/CreateEvent.js';
import CreateCourse from '../components/modals/CreateCourse.js';
import CreateNews from '../components/modals/CreateNews.js';
import UpdateSchoolInfo from '../components/modals/UpdateSchoolInfo.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {observer} from "mobx-react-lite"
import {Context} from '../index';
import {fetchAllRecords} from '../http/recordAPI';
import {fetchCourses} from '../http/courseApi';
import {fetchSchools} from '../http/schoolApi';
import { NavLink } from 'react-bootstrap';
import { RECORD_MANAGEMENT, EVENT_RECORD_MANAGEMENT } from '../utills/constants.js';

const Admin = observer( () => {
    const [schoolVisible, setSchoolVisible] = useState(false)
    const [schoolUpdateVisible, setSchoolUpdateVisible] = useState(false)
    const [eventVisible, setEventVisible]   = useState(false)
    const [courseVisible, setCourseVisible] = useState(false)
    const [biblioVisible, setBiblioVisible] = useState(false)
    const [newsVisible, setNewsVisible]     = useState(false)
    
    const navigate = useNavigate()

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



    return (
        <Container className="d-flex flex-column">
            <Row>
            <Col className="block-example  border-end border-primary  border-3 border-dashed mt-3 p-2 ">
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
            <Col><Button c
            lassName='mt-4 p-2'
            onClick={() => setSchoolUpdateVisible(true)}
            > Обновить школу </Button></Col>
            <Col><Button className='mt-4 p-2' variant='danger'> Удалить школу </Button></Col>
            </Row>
            </Col>
            <Col className="block-example  border-end border-primary  border-3 border-dashed mt-3 p-2 ">
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
            </Col>
            <Col className="block-example mt-3 p-2 ">
            <Row className="d-flex align-items-center mt-4">
            <h4>Работа с мероприятиями</h4>    
            <Col className="d-flex align-items-center">
            <Button className='mt-4 p-2 btn btn-sm'
             variant='success'
            onClick={() => setEventVisible(true)}>
                Добавить мероприятие
            </Button>
            </Col>
            <Col><Button className='mt-4 p-2 btn btn-sm'> Обновить мероприятие </Button></Col>
            <Col><Button className='mt-4 p-2 btn btn-sm'  variant='danger'> Удалить мероприятие </Button></Col>
            </Row>
            </Col>
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
            <h4>Работа с новостями</h4>    
            <Col><Button className='mt-4 p-2' variant='success'  onClick={() => setNewsVisible(true)}>Создать новость</Button></Col>
            <Col><Button className='mt-4 p-2' variant='danger'>Удалить новость</Button></Col>
            </Row>
            <Row className="d-flex align-items-center mt-4" >
            <h4>Работа с заявками</h4>    
            <Col><Button className='mt-4 p-2' onClick={()=>navigate(RECORD_MANAGEMENT)}>Запись на курсы </Button></Col>
            <Col><Button className='mt-4 p-2' onClick={()=>navigate(EVENT_RECORD_MANAGEMENT)}>Запись на мероприятия </Button></Col>
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
               < CreateNews show={newsVisible}
                onHide={
                    () => setNewsVisible(false)
                }/>
                <UpdateSchoolInfo show={schoolUpdateVisible}
                onHide={
                    () => setSchoolUpdateVisible(false)
                }/>

        </Container>
    );

} )

export default Admin;
