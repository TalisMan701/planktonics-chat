import axios from 'axios'
import AuthService from "../services/AuthService";

export const API_URL = `https://planktoniks.herokuapp.com/api/v1`

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use(config => {
    config.headers.Authorization = `Authorization ${localStorage.getItem('token')}`
    return config
})

api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if(error.response.status === 401 && error.config && !error._isRetry){
        originalRequest._isRetry = true
        try {
            const response = await AuthService.refresh()
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('tokenRefresh', response.data.refreshToken)
            return api.request(originalRequest)
        }
        catch (e){
            console.log("Не авторизован")
        }
    }
    throw error
})

export default api
