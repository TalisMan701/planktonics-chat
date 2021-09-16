import axios from 'axios'
import AuthService from "../services/AuthService";
import {IUser} from "../models/IUser";
import { store } from '../store';
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

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
            localStorage.removeItem('token')
            localStorage.removeItem('tokenRefresh')
            store.dispatch(AuthActionCreators.setIsAuth(false))
            store.dispatch(AuthActionCreators.setUser({} as IUser))
        }
    }
    throw error
})

export default api
