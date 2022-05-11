import {makeAutoObservable} from 'mobx'
import {EVENT_ROUTE, MAIN_ROUTE, SCHOOL_ROUTE} from '../utills/constants'

export default class SchoolStore {
    constructor() {
        this._schools = []
        this._courses = [
            {
                id: 1,
                course_name: "10 класс Физика",
                course_description: "Курс для подготовки к поступлению в Лицей БГУ ",
                img: "ebba105d-8d31-46e0-a842-eccab5b0cbe4.jpg",
                SchoolId: 1
            }, {
                id: 2,
                course_name: "9 класс Физика",
                course_description: "Курс для подготовки к поступлению в Лицей БГУ ",
                img: "ed9fd081-15c1-4f6a-b9aa-9a0d258046a4.jpg",
                SchoolId: 1
            }
        ]
        this._records = []
        this._events = [
            {
                id: 1,
                event_name: "Турнир",
                event_description: "Соревнование по физике ",
                img: "6f315b5c-ac97-40a3-98ce-380e1c409d31.jpg",
                SchoolId: 2
            }, {
                id: 2,
                event_name: "Турнир по химии",
                event_description: "Соревнование по химии",
                img: "ecb72b86-a471-433c-9cf3-1a8ec3c50b5a.jpg",
                SchoolId: 2
            }, {
                id: 3,
                event_name: "Турнир по географии",
                event_description: "Соревнование по географии",
                img: "fb679a9e-751c-4f3b-898f-5ccb0fe39a17.jpg",
                SchoolId: 4
            }, {
                id: 4,
                event_name: "Турнир по биологии",
                event_description: "Соревнование по биологии",
                img: "25571a92-5802-4cb3-9205-335f2532d897.jpg",
                SchoolId: 3
            }
        ]
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
                path: MAIN_ROUTE
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
