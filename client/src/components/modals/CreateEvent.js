import React, { useContext , useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal"
import {Button, Dropdown, Form} from "react-bootstrap"
import { Context } from '../..';
import { createEvent, fetchEvents } from '../../http/eventAPI'; 
import { fetchSchools } from '../../http/schoolApi'; 
import { Label } from 'reactstrap';


const CreateEvent = ({show, onHide}) => {
    const {school} = useContext(Context)
    const [event_name, setEventName] = useState('')
    const [event_description, setEventDesription] = useState('')
    const [selectedOption, setSelectedOption] = useState(false)
    const [file_name, setFile] = useState('')

    useEffect(()=>{
        fetchEvents( ).then(data => school.setEvents(data.rows))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    const options = [
        {
            id: 1,
            label:'Да',
            value: true
        },
        {
            id: 2,
            label:'Нет',
            value: false
        }
    ]

   const addEvent = () =>{
        const formData = new FormData()
        console.log(event_name, event_description, selectedOption.value, file_name)
        formData.append('event_name',event_name )
        formData.append('event_description',event_description)
        formData.append('is_registrated', selectedOption.value)
        formData.append('img', file_name)
        createEvent(formData).then( data => onHide())
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
                   Добавить новое мероприятие
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
               <Form.Control
               value={event_name}
               onChange={e => setEventName(e.target.value)} 
               placeholder='Введите название мероприятия'/>  
               <Form.Control
               value={event_description} 
               onChange={e => setEventDesription(e.target.value)}
               className='mt-2'
               placeholder='Введите описание мероприятия'/>  
               <Dropdown  className='mt-2 mb-2'>
               <Dropdown.Toggle>Нужно ли записываться на мероприятие ?  { selectedOption.label ? selectedOption.label : <></>}</Dropdown.Toggle>
               <Dropdown.Menu>
               {options.map( item => 
                <Dropdown.Item  onClick={()=> {
                    setSelectedOption(item)} }
                key={item.id} >
                    {item.label}</Dropdown.Item>)}
               </Dropdown.Menu>
               </Dropdown>
               <Form.Control onChange={selectFile} type='file'/>  
               </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addEvent}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default CreateEvent;
