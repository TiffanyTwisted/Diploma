import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const createRecord = async (record) => {
    const {data} = await $host.post('api/record', record)
    return data
}

export const changeStatusToInProcess = async (record) => {
    const {data} = await $host.post('api/record/process', record)
    return data
}

export const changeStatusToApproved = async (record) => {
    const {data} = await $host.post('api/record/approve', record)
    return data
}

export const changeStatusToCanceled = async (record) => {
    const {data} = await $host.post('api/record/cancel', record)
    return data
}

export const fetchRecordsByUserId = async(id) =>{
    const {data} = await $host.get('api/record?UserId=' + id)
    return data
}

export const fetchAllRecords = async() =>{
    const {data} = await $host.get('api/record')
    return data
}