import React, { useContext , useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal"
import {Button, Dropdown, Form} from "react-bootstrap"
import {observer} from "mobx-react-lite";
import { createRecord } from '../../http/recordAPI';
import {fetchAllRecords} from '../../http/recordAPI';
import { Context } from '../..';
import  {toJS}  from "mobx"

const CreateRecord = observer( ({show, onHide, user_id, course_id} ) => {
    const [recordsNew, setNewRecords] = useState({});
    const {school} = useContext(Context)
        useEffect(() => {
            fetchAllRecords().then(data => { school.setRecords(data.rows) 
                                            setNewRecords(data) } )
        }, [])
        
    const records = school.records
        
        const addRecord = (user_id, course_id, records, onHide) =>{
            let check= records.some(record =>{
                if( record.UserId   === user_id && 
                    record.CourseId === course_id)
               {
                  alert('Вы уже подали заявку на этот курс')
                  return true
               }  else return false
            } ) 
            
           if(check === false ){
            const formData = new FormData()
            formData.append('UserId', user_id )
            formData.append('CourseId', course_id )
            createRecord(formData).then( data => {
                console.log("Новая запись создалась")
                alert('Заявка подана')})
           }
           
           console.log("Records after new entry", recordsNew)
           onHide()
           
         }

    return (
        <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Запись на курс</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" >
            Закрыть
          </Button>
          <Button variant="primary"  onClick={()=> { addRecord(user_id, course_id, records, onHide) }}>
            Записаться
          </Button>
        </Modal.Footer>
      </Modal>
    )
} ) 

export default CreateRecord;
