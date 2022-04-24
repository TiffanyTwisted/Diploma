import React, { useContext } from 'react';
import Modal from "react-bootstrap/Modal"
import {Button, Dropdown, Form} from "react-bootstrap"
import { Context } from '../..';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';


const CreateCourse = ({show, onHide}) => {
    const {school} = useContext(Context)
    console.log(school)
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
               <Form.Control placeholder='Введите название курса'/>  
               <Form.Control placeholder='Введите описание курса' className='mt-2'/>  
               <Dropdown className='mt-2 mb-2'>
               <Dropdown.Toggle>Выберите школу</Dropdown.Toggle>
               <Dropdown.Menu>
                   {school.schools.map(schoolItem=>
                <Dropdown.Item key={schoolItem.id}>{schoolItem.school_name}</Dropdown.Item>)}
               </Dropdown.Menu>
               </Dropdown>
               <Form.Control type='file'/>  
               </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default CreateCourse;
