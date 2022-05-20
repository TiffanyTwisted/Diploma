import React, { useContext , useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal"
import {Button, Dropdown, Form} from "react-bootstrap"
import {observer} from "mobx-react-lite";
import { createRecord } from '../../http/recordAPI';
import {fetchAllRecords} from '../../http/recordAPI';
import { Context } from '../..';
import  {toJS}  from "mobx"

const UpdateRecord = observer( ({show, onHide, index} ) => {
    const [recordsNew, setNewRecords] = useState({});
    const {school} = useContext(Context)
        useEffect(() => {
            fetchAllRecords().then(data => { school.setRecords(data.rows) 
                                            setNewRecords(data) } )
        }, [])
        
    const records = school.records
    const currentRecord = recordsNew[ index ]
        
    console.log(index, records, records[ 1 ],  currentRecord)

    return (
        <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Обновление записи</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" >
            Закрыть
          </Button>
          <Button variant="primary"  onClick={()=> { }} >
            Сохранить
          </Button>
        </Modal.Footer>
      </Modal>
    )
} ) 

export default UpdateRecord;
