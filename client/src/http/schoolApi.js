import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const createSchool = async (school) => {
    const {data} = await $authHost.post('api/school', school)
    return data
}

export const fetchSchools = async ( ) => {
    const {data} = await $host.get('api/school')
    return data
}
