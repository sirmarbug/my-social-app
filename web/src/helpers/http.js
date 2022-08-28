import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:5001/api',
    timeout: 3000
})

http.interceptors.request.use(config => {
    if (localStorage.getItem('token')) {
        config.headers.common.Authorization = localStorage.getItem('token')
    }
    return config
})

http.interceptors.response.use(
    response => {
        return response
    },
    async error => {
        return Promise.reject(error)
    }
)

export const getAll = async (uri) => {
    try {
        const response = await http.get(uri)
        return response
    } catch (e) {
        console.error(e)
    }
}

export const post = async (uri, data) => {
    try {
        const response = await http.post(uri, data)
        return response
    } catch (e) {
        console.error(e)
    }
}

export const update = async (uri, data) => {
    try {
        const response = await http.put(uri, data)
        return response
    } catch (e) {
        console.error(e)
    }
}

export const remove = async (uri) => {
    try {
        const response = await http.delete(uri)
        return response
    } catch (e) {
        console.error(e)
    }
}
