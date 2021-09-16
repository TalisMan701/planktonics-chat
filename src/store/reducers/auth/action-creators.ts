import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import AuthService from "../../../services/AuthService";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (isAuth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: isAuth}),
    setError: (error: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: isLoading}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const response = await AuthService.login(username, password);
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('tokenRefresh', response.data.refreshToken)
            dispatch(AuthActionCreators.setIsAuth(true))
            dispatch(AuthActionCreators.setUser(response.data.user))
            dispatch(AuthActionCreators.setIsLoading(false))
        }
        catch (e){
            dispatch(AuthActionCreators.setError("Произошла ошибка при логине"))
        }
    },
    checkAuth: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const getUserAuthResponse = await AuthService.checkAuth()
            dispatch(AuthActionCreators.setIsAuth(true))
            dispatch(AuthActionCreators.setUser(getUserAuthResponse.data.user))
            dispatch(AuthActionCreators.setIsLoading(false))
        }
        catch (e){
            dispatch(AuthActionCreators.setError("Произошла ошибка при получении данных"))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            localStorage.removeItem('tokenRefresh')
            dispatch(AuthActionCreators.setIsAuth(false))
            dispatch(AuthActionCreators.setUser({} as IUser))
        }
        catch (e){
            dispatch(AuthActionCreators.setError("Произошла ошибка при выходе"))
        }
    }
}
