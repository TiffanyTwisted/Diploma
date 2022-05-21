import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useLocation, useParams} from 'react-router-dom';
import MenuBar from '../components/Menu';
import {Context} from '../index';
import {fetchOneCourse} from '../http/courseApi';
import {Button, Image} from "react-bootstrap"
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from "reactstrap";
import {observer} from 'mobx-react-lite';
import CreateRecord from '../components/modals/CreateRecord';
import {createRecord} from '../http/recordAPI';

const CourseItemPage = observer(() => {
    const {school} = useContext(Context)
    const {user} = useContext(Context)
    const user_id = user.user.id
    const course_id = useParams() // return course id from URL
    const [courseItem, setCourseItem] = useState({})
    const [recordVisible, setRecordVisible] = useState(false)

    useEffect(() => {
        fetchOneCourse(course_id.id).then(data => setCourseItem(data))
    }, [])

    return (<Container>
        <Row className='mt-3'>
            <Col md={3}>
                <MenuBar/>
            </Col>
            <Col md={9}>
                <Row>
                    <Card style={
                            {
                                cursor: 'pointer',
                                width: 850,
                                borderRadius: 20
                            }
                        }
                        boreder={"light"}
                        className='mt-3'> 
                    
                        <CardBody className="p-4">
                            <Row>
                                <Col>
                                    <CardTitle tag="h5"> {
                                        courseItem.course_name
                                    }</CardTitle>
                                    <CardText> {
                                        courseItem.course_description
                                    }</CardText>
                                    {
                                    user.isAuth ? <Button variant="info"
                                        onClick={
                                            () => setRecordVisible(true)
                                    }>Записаться на курс</Button> : <div></div>
                                } </Col>
                                <Col className='d-flex justify-content-center'> {
                                    courseItem.img ? <Image width={300}
                                        height={250}
                                        style={
                                            {borderRadius: 50}
                                        }
                                        src={
                                            process.env.REACT_APP_API_URL + courseItem.img
                                    }></Image> : <Image width={300}
                                        height={250}
                                        style={
                                            {borderRadius: 50}
                                        }
                                        src='//demos.wrappixel.com/free-admin-templates/react/materialpro-react-free/main/static/media/user4.6ac95ef9.jpg'></Image>
                                } </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <CreateRecord show={recordVisible}
                        onHide={
                            () => setRecordVisible(false)
                        }
                        user_id={user_id}
                        course_id={
                            Number(course_id.id)
                        }/>
                </Row>
            </Col>
        </Row>
    </Container>);

})

export default CourseItemPage;
