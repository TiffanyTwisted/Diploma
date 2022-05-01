// Split routes as authRoutes( only authorization users) and publicRoutes(for all people)

import Auth from "../pages/Auth"
import Admin from "../pages/Admin"
import SchoolItemPage from "../pages/SchoolItemPage"
import Schools from "../pages/Schools"
import Main from "../pages/Main"
import {ADMIN_ROUTE, EVENT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SCHOOL_ROUTE } from "../utills/constants"
import Registration from "../pages/Registration"
import EventsPage from "../pages/EventsPage"
import EventItemPage from "../pages/EventItemPage"
import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"

export const authRoutes = [{
        path: ADMIN_ROUTE,
        Component: Admin
    }]

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
        path: REGISTRATION_ROUTE, 
        Component:  Auth
    },
    {
        path: SCHOOL_ROUTE, 
        Component: Schools
    },
    {
        path: SCHOOL_ROUTE + '/:id',
        Component: SchoolItemPage
    },
    {
        path: EVENT_ROUTE, 
        Component: EventsPage
    },
    {
        path: EVENT_ROUTE + '/:id', 
        Component: EventItemPage
    }

]
