import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useLocation, useParams} from 'react-router-dom';
import MenuBar from '../components/Menu';
import {Context} from '../index';
import {fetchOneNews} from '../http/infoApi';
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

const NewsItemPage = observer(() => {
    const {info} = useContext(Context)
    const news_id = useParams() // return course id from URL
    const [newsItem, setNewsItem] = useState({})

    useEffect(() => {
        fetchOneNews(news_id.id).then(data => setNewsItem(data))
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
                                        newsItem.title
                                    }</CardTitle>
                                    <CardText><h6> #{
                                        newsItem.pretext
                                    } </h6></CardText>
                                    <CardText> {
                                        newsItem.summary
                                    }</CardText>
                              </Col>
                                <Col className='d-flex justify-content-center'> {
                                    newsItem.img ? <Image width={300}
                                        height={250}
                                        style={
                                            {borderRadius: 50}
                                        }
                                        src={
                                            process.env.REACT_APP_API_URL + newsItem.img
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
                </Row>
            </Col>
        </Row>
    </Container>);

})

export default NewsItemPage;
