import React, {useContext, useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal"
import {Button, Dropdown, Form} from "react-bootstrap"
import {observer} from "mobx-react-lite";
import {changeStatusToInProcess, changeStatusToApproved, changeStatusToCanceled} from '../../http/recordAPI';
import {fetchAllRecords} from '../../http/recordAPI';
import {Context} from '../..';
import {toJS} from "mobx"

const UpdateRecord = observer(({show, onHide, record}) => {
    const [recordsNew, setNewRecords] = useState({});
    const [selectedOption, setSelectedOption] = useState(false)
    const {school} = useContext(Context)


        const statuses = [
          {
              id: 1,
              label:'Новая заявка',
              value: process.env.REACT_APP_NEW
          },
          {
              id: 2,
              label:'В процессе',
              value: process.env.REACT_APP_IN_PROGRESS
          },
          {
            id: 3,
            label:'Записан(a)',
            value: process.env.REACT_APP_APPROVED
        },
        {
          id: 4,
          label:'Отказано',
          value: process.env.REACT_APP_CANCELED
      }
      ]

      const updateRecord = (value) =>{
        const formData = new FormData()
        formData.append('CourseId', record.CourseId)
        formData.append('UserId', record.UserId )
        if ( value === process.env.REACT_APP_IN_PROGRESS ) {
          changeStatusToInProcess( formData ).then (data => onHide()) 
        }
        if ( value === process.env.REACT_APP_APPROVED ) {
          changeStatusToApproved( formData ).then (data => onHide()) 
        }
        if ( value === process.env.REACT_APP_CANCELED ) {
          changeStatusToCanceled( formData ).then (data => onHide()) } 
    }

    return (<Modal show={show}
        onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Обновление записи</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>ID</Form.Label>
                    <Form.Control placeholder={
                            record.id
                        }
                        disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Название курса</Form.Label>
                    <Form.Control placeholder={
                            record.CourseName
                        }
                        disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Название школы</Form.Label>
                    <Form.Control placeholder={
                            record.SchoolName
                        }
                        disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>ID школьника</Form.Label>
                    <Form.Control placeholder={
                            record.UserId
                        }
                        disabled/>
                </Form.Group>
                <Dropdown  className='mt-2 mb-2'>
               <Dropdown.Toggle>{ selectedOption.label ? selectedOption.label : record.is_actived}</Dropdown.Toggle>
               <Dropdown.Menu>
               {statuses.map( item => 
                <Dropdown.Item  onClick={()=> {
                    setSelectedOption(item)} }
                key={item.id} >
                    {item.label}</Dropdown.Item>)}
               </Dropdown.Menu>
               </Dropdown>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary"  onClick={onHide}>
                Закрыть
            </Button>
            <Button variant="primary"
                onClick={
                    () => {updateRecord(selectedOption.value) }
            }>
                Сохранить
            </Button>
        </Modal.Footer>
    </Modal>)
})

export default UpdateRecord;
