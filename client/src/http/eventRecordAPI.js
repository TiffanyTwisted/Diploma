import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const createRecord = async (record) => {
    const {data} = await $host.post('api/eventrecord', record)
    return data
}

export const changeStatusToInProcess = async (record) => {
    const {data} = await $host.put('api/eventrecord/process', record)
    return data
}

export const changeStatusToApproved = async (record) => {
    const {data} = await $host.put('api/eventrecord/approve', record)
    return data
}

export const changeStatusToCanceled = async (record) => {
    const {data} = await $host.put('api/eventrecord/cancel', record)
    return data
}

export const fetchRecordsByUserId = async(id) =>{
    const {data} = await $host.get('api/eventrecord?UserId=' + id)
    return data
}

export const fetchAllRecords = async() =>{
    const {data} = await $host.get('api/eventrecord')
    return data
}