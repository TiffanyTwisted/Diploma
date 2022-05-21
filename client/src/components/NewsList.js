import React, { useContext , useState, useEffect} from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
  } from "reactstrap";
  import {Row} from 'react-bootstrap';
  import {Context} from '../index';
  import {observer} from "mobx-react-lite";
  import { fetchNews } from '../http/infoApi';
  import NewsItem from './NewsItem';

const NewsList = observer(  ( ) => {
    const {info} = useContext(Context)
    useEffect(() => {
        fetchNews().then(data => info.setNews(data))
    }, [])
    console.log(info.news)
    return (
        <Row className="d-flex"> {
            info.news.map(news => <NewsItem key={
                    news.id
                }
               news={news}/>)
        }</Row>
    )
} ) 

export default NewsList;