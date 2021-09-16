import api from "../http";
import {AxiosResponse} from 'axios'
import {AuthResponse} from "../models/response/AuthResponse";
export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>('/oauth/tokens', {login: username, password})
    }
    static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
        return api.get<AuthResponse>('/users/sync')
    }
    static async logout(): Promise<void> {
        return api.get('/users/logout')
    }
    static async refresh(): Promise<AxiosResponse<AuthResponse>>{
        return api.post<AuthResponse>('/oauth/refresh', {refreshToken: localStorage.getItem("tokenRefresh") || ''})
    }
}
