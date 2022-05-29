import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const createSchool = async (school) => {
    const {data} = await $host.post('api/school', school)
    return data
}

export const fetchSchools = async ( ) => {
    const {data} = await $host.get('api/school')
    return data
}

export const fetchOneSchool = async ( id ) => {
    const {data} = await $host.get('api/school/'+ id )
    return data
}

export const updateOneSchool =  async ( ) => {
    const {data} = await $host.put('api/school/' )
    return data
}
