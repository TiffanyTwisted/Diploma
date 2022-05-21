import React from 'react';
import {Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {MAIN_ROUTE} from '../utills/constants';
import {Button} from "react-bootstrap"
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
  } from "reactstrap";

const NewsItem = ({news}) => {
    const history = useNavigate();
    return (
        <Col  >
            <Card style={
                    {
                        width: 350,
                        height:500, 
                        cursor: 'pointer',
                        borderRadius: 20
                    }
                }
                boreder={"light"}
                className='mt-3'>
                    { news.img ? 
                <CardImg width={250}
                    height={200}
                    src={
                        process.env.REACT_APP_API_URL + news.img
                    }/>
                    : 
                    <CardImg width={250}
                    height={200}
                    src='//demos.wrappixel.com/free-admin-templates/react/materialpro-react-free/main/static/media/user4.6ac95ef9.jpg'/> 
                }
                <CardBody className="p-4">
                    <CardTitle tag="h5">
                        {
                        news.title
                    }</CardTitle>
                    <CardText>{
                        news.pretext
                    } </CardText>
                    <CardText>{
                        news.summary.length > 100 ? news.summary.substring(0, 100) + '...' : news.summary
                    }</CardText>
                    <Button variant="info" onClick={ () =>  history( '/' + news.id)}>Читать дальше</Button>
                </CardBody>
            </Card>
        </Col>
    );

};

export default NewsItem;
