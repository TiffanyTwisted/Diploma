import {makeAutoObservable} from 'mobx'
import {BIBLIO_ROUTE, EVENT_ROUTE, MAIN_ROUTE, SCHOOL_ROUTE} from '../utills/constants'

export default class SchoolStore {
    constructor() {
        this._schools = []
        this._courses = [ ]
        this._records = []
        this._eventrecords = []
        this._events = [ ]
        this._menuitems = [
            {
                id: 1,
                name: "Мероприятия",
                path: EVENT_ROUTE
            }, {
                id: 2,
                name: "Школы Юных БГУ",
                path: SCHOOL_ROUTE
            }, {
                id: 3,
                name: "Библиотека",
                path: BIBLIO_ROUTE
            }
        ]
        this._selectedItem = {}
        this._selectedSchool = {}
        makeAutoObservable(this);
    }

    setSchool(school) {
        this._schools = school;
    }

    setCourses(courses) {
        this._courses = courses;
    }

    setEvents(events) {
        this._events = events;
    }

    setMenuItems(menuitems) {
        this._menuitems = menuitems;
    }

    setRecords(records){
        this._records = records;
    }

    setEventRecords(records){
        this._eventrecords = records;
    }

    setSelectedItem(item) {
        this._selectedItem = item;
    }

    setSelectedSchool(school) {
        this._selectedSchool = school;
    }

    getSchoolById(id) {
        let schoolItem = this._schools.map(item => {
            if (item.id == id) {
                return item
            }
        })
        return schoolItem
    }

    getCourseById(id) {
        let courseItem = this._courses.map(item => {
            if (item.id == id) {
                return item
            }
        })
        return courseItem
    }

    get records(){
        return this._records
    }

    get eventrecords(){
        return this._eventrecords
    }

    get schools() {
        return this._schools
    }

    get courses() {
        return this._courses
    }

    get events() {
        return this._events
    }

    get menuitems() {
        return this._menuitems
    }

    get selectedItem() {
        return this._selectedItem
    }

    get selectedSchool() {
        return this._selectedSchool
    }

}
