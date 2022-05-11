import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const createCourse= async (course) => {
    const {data} = await $authHost.post('api/course', course)
    return data
}

export const fetchCourses = async ( ) => {
    const {data} = await $host.get('api/course')
    return data
}

export const fetchOneCourse = async ( id ) => {
    const {data} = await $host.get('api/course/'+id)
    return data
}

export const sortCoursesBySchoolId = async ( school_id ) => {
    const {data} = await $host.get('api/course/?SchoolId='+ school_id)
    console.log(data)
    return data
}
