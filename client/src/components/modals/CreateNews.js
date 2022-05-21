import React, { useContext , useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal"
import {Button, Dropdown, Form} from "react-bootstrap"
import {observer} from "mobx-react-lite"; 
import { createNews } from '../../http/infoApi';

const CreateNews = observer( ({show, onHide}) => {
    const [title, setTitle] = useState('')
    const [pretext, setPretext] = useState('')
    const [summary, setSummary] = useState('')
    const [file_name, setFile] = useState('')

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addNews = () =>{
        const formData = new FormData()
        formData.append('title', title )
        formData.append('pretext', pretext)
        formData.append('summary', summary)
        formData.append('img', file_name)
        createNews(formData).then( data => onHide())
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
                   Добавить новую новость 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
               <Form.Control
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder='Введите название новости'/>  
               <Form.Control 
               value={pretext} 
               onChange={e => setPretext(e.target.value)}
               placeholder='Введите дополнительную информацию' 
               className='mt-2'/>  
               <Form.Control 
               value={summary} 
               onChange={e => setSummary(e.target.value)}
               placeholder='Введите описание новости' 
               className='mt-2'/> 
               <Form.Control onChange={selectFile} type='file'/>  
               </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addNews}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    )
} ) 

export default CreateNews
