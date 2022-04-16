// Split routes as authRoutes( only authorization users) and publicRoutes(for all people)

import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"
import Auth from "../pages/Auth"
import Admin from "../pages/Admin"
import Schools from "../pages/Schools"
import Main from "../pages/Main"
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SCHOOL_ROUTE } from "../utills/constants"

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
        path: SCHOOL_ROUTE + '/:id', 
        Component: Schools
    }

]
