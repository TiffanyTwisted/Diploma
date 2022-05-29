import React, {useContext, useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {observer} from "mobx-react-lite"
import {toJS} from 'mobx';
import {Context} from '../index';
import {fetchAllRecords} from '../http/eventRecordAPI';
import {fetchEvents} from '../http/eventAPI';
import UpdateEventRecord from './modals/UpdateEventRecord'

const columns = [
    {
        dataField: 'id',
        text: ''
    },
    {
        dataField: 'EventName',
        text: 'Название мероприятия'
    },
    {
        dataField: 'UserId',
        text: 'ID школьника'
    }, 
    {
        dataField: 'is_actived',
        text: 'Статус заявки'
    }
];

const cellEdit = {
    mode: 'click'
};

const EventRecordTable = observer(() => {
    const {school, user} = useContext(Context)
    const [recordVisible, setRecordVisible] = useState(false)
    const [recordItem, setRecordItem] = useState({})

    const selectRow = {
        mode: 'radio',
        onSelect: (row, rowIndex) => {
            setRecordVisible(true)
            setRecordItem(row)
        },
        clickToEdit: true // Click to edit cell also
    };

    // Fill data from Storage
    useEffect(() => {
        fetchAllRecords().then(data => school.setEventRecords(data.rows))
    }, [])

    useEffect(() => {
        fetchEvents().then(data => school.setEvents(data.rows))
    }, [])

    let recordsArray   = toJS(school.eventrecords)
    const eventsArray = toJS(school.events)

    recordsArray = recordsArray.filter(function (el) {
        return (el != null && el != "" || el === 0);
    });

    // Summary of arrays
    let data = recordsArray.map((record, index) => {
        let eventdata = eventsArray.find(event => {
            if (event !== undefined && event.id === record.EventId) {
                return event.event_name
            }
        })
        let properties
        if (eventdata  !== undefined && 
            record     !== undefined ) {
            properties = {
                "id": index + 1,
                "EventId": record.EventId,
                "is_actived": record.is_actived,
                "UserId": record.UserId,
                "EventName": eventdata.event_name
            };
        }
        return properties;
    });


    return (
    <><BootstrapTable keyField="id"
        data={data}
        columns={columns}
        selectRow={selectRow}/>
          <UpdateEventRecord show={recordVisible}
                        onHide={
                            () => setRecordVisible(false)
                        }
                         record={ recordItem}
                        />
        </>
        )
})
export default EventRecordTable;
