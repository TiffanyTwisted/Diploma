import React, { useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal"
import {Button, Form} from "react-bootstrap"
import { createSchool } from '../../http/schoolApi';
import {observer} from "mobx-react-lite";


const CreateSchool =  observer( ({show, onHide}) => {

    const [school_name, setSchoolName] = useState('')
    const [school_description, setSchoolDescription] = useState('')
    const [file_name, setFile] = useState('')

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addSchool =  () =>{
        const formData = new FormData()
        console.log(school_name, school_description, file_name)
        formData.append('school_name',school_name )
        formData.append('school_description',school_description )
        formData.append('img', file_name)
        createSchool(formData).then( data => onHide())
    }

    return (
        <Modal
         size="lg" 
         aria-labelledby="contained-modal-title-vcenter"
         centered 
         show = {show}
         onHide = {onHide}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Добавить новую школу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
               <Form.Control
                value={school_name}
                onChange={e => setSchoolName(e.target.value)}
                placeholder='Введите название школы'/>      
               <Form.Control
                className='mt-2'
                value={school_description}
                onChange={e => setSchoolDescription(e.target.value)}
                placeholder='Введите описание школы'/>  
               <Form.Control   className='mt-2' onChange={selectFile} type='file'/>  
               </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addSchool}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    )
} ) 

export default CreateSchool;
