// Split routes as authRoutes( only authorization users) and publicRoutes(for all people)

import Auth from "../pages/Auth"
import Admin from "../pages/Admin"
import SchoolItemPage from "../pages/SchoolItemPage"
import Schools from "../pages/Schools"
import Main from "../pages/Main"
import {
    ADMIN_ROUTE,
    COURSE_ROUTE,
    EVENT_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    RECORD_MANAGEMENT, 
    EVENT_RECORD_MANAGEMENT, 
    SCHOOL_ROUTE,
    BIBLIO_ROUTE
} from "../utills/constants"
import EventsPage from "../pages/EventsPage"
import EventItemPage from "../pages/EventItemPage"
import ProfilePage from "../pages/Profile"
import CourseItemPage from "../pages/CourseItemPage"
import RecordManagement from "../pages/RecordManagement "
import EventRecordManagement from "../pages/EventRecordManagement "
import BiblioPage from "../pages/BiblioPage"
import NewsItemPage from "../pages/NewsItemPage"


export const authRoutes = [{
        path: ADMIN_ROUTE,
        Component: Admin
    }, {
        path: PROFILE_ROUTE,
        Component: ProfilePage
    }, 
    {
        path: RECORD_MANAGEMENT, 
        Component : RecordManagement
    },
    {
        path: EVENT_RECORD_MANAGEMENT, 
        Component : EventRecordManagement
    },
    {
        path: BIBLIO_ROUTE, 
        Component : BiblioPage
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: MAIN_ROUTE + '/:id',
        Component: NewsItemPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: SCHOOL_ROUTE,
        Component: Schools
    }, {
        path: SCHOOL_ROUTE + '/:id',
        Component: SchoolItemPage
    }, {
        path: EVENT_ROUTE,
        Component: EventsPage
    }, {
        path: EVENT_ROUTE + '/:id',
        Component: EventItemPage
    }, 
    {
        path: COURSE_ROUTE + '/:id',
        Component: CourseItemPage
    }

]
