import React from 'react';
import Modal from "react-bootstrap/Modal"
import {Button, Form} from "react-bootstrap"


const CreateSchool = ({show, onHide}) => {
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
               <Form.Control placeholder='Введите название школы'/>  
               </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default CreateSchool;
