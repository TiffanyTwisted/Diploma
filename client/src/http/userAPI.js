// This API validates tokens, registates users
import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const registration = async (email, password,first_name,middle_name,last_name) => {
    const {data} = await $host.post('api/user/registration', {email, password, role:'manager', first_name,middle_name,last_name})
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}

export const readUserInfo = async(id) =>{
    const {data} = await $authHost.get('api/user/info' + '/'+ id)
    return data
}
