import React, {useContext, useState, useEffect} from 'react';
import Modal from "react-bootstrap/Modal"
import {Button, Dropdown, Form} from "react-bootstrap"
import {observer} from "mobx-react-lite";
import {Context} from '../..';
import BootstrapTable from 'react-bootstrap-table-next';
import {fetchSchools} from '../../http/schoolApi';
import { updateOneSchool } from '../../http/schoolApi';
import {toJS} from "mobx"

const columns = [
    {
        dataField: 'id',
        text: 'ID'
    },
    {
        dataField: 'school_name',
        text: 'Название школы'
    },
    {
        dataField: 'school_description',
        text: 'Описание школы'
    }
];

const cellEdit = {
    mode: 'click'
};


const UpdateSchoolInfo = observer(({show, onHide}) => {
    const [name_new, setNewName] = useState({});
    const [selectedItem, setSelectedItem] = useState({});
    const [description_new, setNewDescription] = useState({});
    const {school} = useContext(Context)

    useEffect(() => {
        fetchSchools().then(data => school.setSchool(data))
    }, [])

    const selectRow = {
        mode: 'radio',
        onSelect: (row, rowIndex) => {
            setSelectedItem(row)
            console.log(toJS(selectedItem) )
        }
    };

    const schoolsArray = school.schools 

      const updateSchool = (value) =>{
        const formData = new FormData()
        console.log("Описание, имя",name_new, description_new, value.id)
        formData.append('school_description', description_new)
        formData.append('id', value.id)
        formData.append('school_name', name_new)
        updateOneSchool( formData).then( data => onHide()) 
    }

    return (

    <Modal show={show}
        onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Обновление школы</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <BootstrapTable keyField="id"
        data={schoolsArray}
        columns={columns}
        selectRow={selectRow}/>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>ID</Form.Label>
                    <Form.Control placeholder={
                            selectedItem.id
                        }
                        disabled/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Название школы</Form.Label>
                    <Form.Control  
                    value={ name_new } 
                    onChange = { e => setNewName(e.target.value)}
                    placeholder={
                        toJS(selectedItem).school_name
                        }
                      />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Описание школы</Form.Label>
                    <Form.Control
                    value={ description_new } 
                    onChange = { e => setNewDescription(e.target.value)}
                     placeholder={
                        selectedItem.school_description
                        }/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary"  onClick={onHide}>
                Закрыть
            </Button>
            <Button variant="primary"
                onClick={
                    () => {updateSchool(selectedItem) }
            }>
                Сохранить
            </Button>
        </Modal.Footer>
    </Modal>)
})

export default UpdateSchoolInfo 
