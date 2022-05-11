import React, {useContext, useState, useEffect} from 'react';
import {observer} from "mobx-react-lite"
import {Context} from '../index';
import { fetchRecords } from '../http/recordAPI';  
import Table from 'react-bootstrap/Table';

const StatusTable = observer(( ) => {
const {school, user} = useContext(Context)
const user_id = user.user.id
const [records, setRecords] = useState({ })

useEffect(() => {
    const formData = new FormData()
    formData.append('UserId', user_id )
    fetchRecords(formData).then(data => setRecords(data))
}, [])

console.log(records)
console.log(user_id)
    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Название курса</th>
            <th>Название школы</th>
            <th>Статус заявки</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
) } );

export default  StatusTable;

