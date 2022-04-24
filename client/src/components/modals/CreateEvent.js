import React from 'react';
import Modal from "react-bootstrap/Modal"
import {Button, Form} from "react-bootstrap"


const CreateEvent = ({show, onHide}) => {
    return (
        <Modal
         size="lg" 
         aria-labelledby="contained-modal-title-vcenter"
         centered 
         show = {show}
         onHide = {onHide}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   Добавить новое мероприятие
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
               <Form.Control placeholder='Введите название мероприятия'/>  
               </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default CreateEvent;
