import React, { useContext , useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal"
import {Button, Dropdown, Form} from "react-bootstrap"
import { Context } from '../..';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { fetchSchools } from '../../http/schoolApi';  
import {observer} from "mobx-react-lite";
import { createCourse } from '../../http/courseApi';  


const CreateCourse = observer( ({show, onHide}) => {
    const {school} = useContext(Context)
    const [course_name, setCourseName] = useState('')
    const [course_description, setCourseDesription] = useState('')
    const [file_name, setFile] = useState('')

    useEffect(()=>{
        fetchSchools( ).then(data => school.setSchool(data))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addCourse = () =>{
        const formData = new FormData()
        console.log(course_name, course_description, school.selectedSchool.id, file_name)
        formData.append('course_name',course_name )
        formData.append('course_description',course_description )
        formData.append('SchoolId', school.selectedSchool.id)
        formData.append('img', file_name)
        createCourse(formData).then( data => onHide())
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
                   Добавить новый курс
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
               <Form.Control
                value={course_name}
                onChange={e => setCourseName(e.target.value)}
                placeholder='Введите название курса'/>  
               <Form.Control 
               value={course_description} 
               onChange={e => setCourseDesription(e.target.value)}
               placeholder='Введите описание курса' 
               className='mt-2'/>  
               <Dropdown  className='mt-2 mb-2'>
               <Dropdown.Toggle>{school.selectedSchool.school_name || "Выберите школу"}</Dropdown.Toggle>
               <Dropdown.Menu >
                   {school.schools.map(schoolItem=>
                <Dropdown.Item 
                onClick={()=> {
                    school.setSelectedSchool(schoolItem) 
                    console.log(school)} }
                key={schoolItem.id}>
                    {schoolItem.school_name}</Dropdown.Item>)}
               </Dropdown.Menu>
               </Dropdown>
               <Form.Control onChange={selectFile} type='file'/>  
               </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addCourse}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    )
} ) 

export default CreateCourse;
