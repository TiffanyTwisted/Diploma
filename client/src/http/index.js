import axios from "axios";

// Instance of public host
const $host = axios.create({baseURL:'http://localhost:6010/'})

// Instance of private host
const $authHost = axios.create({baseURL: 'http://localhost:6010/'})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $authHost, 
    $host
}
