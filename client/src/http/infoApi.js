import { $authHost, $host } from ".";

export const createNews= async (news) => {
    const {data} = await $authHost.post('api/news', news)
    return data
}

export const fetchNews = async ( ) => {
    const {data} = await $host.get('api/news')
    return data
}

export const fetchOneNews = async ( id ) => {
    const {data} = await $host.get('api/news/'+ id)
    return data
}

export const uploadFile= async (news) => {
    const {data} = await $authHost.post('api/biblio', news)
    return data
}

export const fetchFiles = async ( ) => {
    const {data} = await $host.get('api/biblio')
    return data
}
