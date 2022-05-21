import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import MenuBar from '../components/Menu';
import {Context} from '../index';
import {Button} from "react-bootstrap"
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
  } from "reactstrap";
  import {observer} from 'mobx-react-lite';
import UpdateRecord from '../components/modals/UpdateRecord.js';
import Table from 'react-bootstrap/Table';
import {fetchFiles} from '../http/infoApi';
import {fetchSchools} from '../http/schoolApi';
import { Link } from 'react-router-dom';
var FileSaver = require('file-saver');

const BiblioPage = observer( ( ) => {
    const {school, info} = useContext(Context)
   
    useEffect(() => {
        fetchFiles().then(data => info.setFiles(data.rows))
    }, [])

    useEffect(() => {
        fetchSchools().then(data => school.setSchool(data))
    }, [])

    const saveFile = (fileName) => {
        FileSaver.saveAs(
          fileName
        );
        };

    const filesArray = info.files
    const schoolsArray = school.schools 

        return (
            <Container>
                <Row className='mt-3'>
            <Col md={3}>
                <MenuBar/>
            </Col>
            <Col md={9}>
            <Card className='mt-4 p-3'>
            <h4 className='mt-3'>Библиотека</h4>
            <Table striped bordered hover className='mt-4'>
            <thead>
                <tr>
                    <th></th>
                    <th>Название файла</th>
                    <th>Название школы</th>
                    <th>Файл</th>
                    <th></th>

                </tr>
            </thead>
            <tbody> {
                filesArray.map((file, index) => <tr>
                    <td>{
                        index + 1
                    }</td>
                    <td>{ file.title }</td>
                    <td>{
                        schoolsArray.map(item => {
                            if (item.id == file.SchoolId) {
                                return item.school_name
                            } 
                        })
                    }</td>
                     <td>{
                         file.file_name
                    }</td>
                     <td>         
                       <Button key={index} className='mt-4 p-2' onClick={()=> saveFile(file.file)} >Скачать</Button> 
                    </td>
                   
                </tr>)
                
            } </tbody>
        </Table>
        </Card>
        </Col>
        </Row>
        </Container>
        );

} ) 

export default BiblioPage;