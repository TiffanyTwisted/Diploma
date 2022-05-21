import React, {useContext, useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import {observer} from "mobx-react-lite"
import {toJS} from 'mobx';
import {Context} from '../index';
import {fetchAllRecords} from '../http/recordAPI';
import {fetchCourses} from '../http/courseApi';
import {fetchSchools} from '../http/schoolApi';
import {useNavigate} from 'react-router-dom';
import UpdateRecord from './modals/UpdateRecord'

const columns = [
    {
        dataField: 'id',
        text: ''
    },
    {
        dataField: 'CourseName',
        text: 'Название курса'
    },
    {
        dataField: 'SchoolName',
        text: 'Название школы'
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

const RecordTable = observer(() => {
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
        fetchAllRecords().then(data => school.setRecords(data.rows))
    }, [])

    useEffect(() => {
        fetchCourses().then(data => school.setCourses(data.rows))
    }, [])

    useEffect(() => {
        fetchSchools().then(data => school.setSchool(data))
    }, [])

    const recordsArray = toJS(school.records)
    const schoolsArray = toJS(school.schools)
    const coursesArray = toJS(school.courses)

    // Summary of arrays
    let data = recordsArray.map((record, index) => {
        let coursedata = coursesArray.find(course => {
            if (course !== undefined && course.id === record.CourseId) {
                return course.course_name
            }
        })
        let schooldata = schoolsArray.find(school => {
            if (coursedata !== undefined && school !== undefined && school.id === coursedata.SchoolId) {
                return school.school_name
            }
        })
        let properties
        if (coursedata !== undefined && 
            schooldata !== undefined && 
            record !== undefined ) {
            properties = {
                "id": index + 1,
                "CourseId": record.CourseId,
                "is_actived": record.is_actived,
                "UserId": record.UserId,
                "CourseName": coursedata.course_name,
                "SchoolName": schooldata.school_name
            };
        }
        return properties;
    });


    return (
    <><BootstrapTable keyField="id"
        data={data}
        columns={columns}
        selectRow={selectRow}/>
          <UpdateRecord show={recordVisible}
                        onHide={
                            () => setRecordVisible(false)
                        }
                         record={ recordItem}
                        />
        </>
        )
})
export default RecordTable;
