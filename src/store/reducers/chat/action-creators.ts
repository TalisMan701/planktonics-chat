import {
    AddMessageAction,
    ChatActionEnum, DeleteMessageAction,
    SetDescriptionAction, SetEditMessageAction,
    SetErrorAction,
    SetIdAction,
    SetIsLoadingAction, SetMessagesAction,
    SetNameAction
} from "./types";
import {AppDispatch} from "../../index";
import ChatService from "../../../services/ChatService";
import {IMessage} from "../../../models/IMessage";


export const ChatActionCreators = {
    setId: (id: string): SetIdAction => ({type: ChatActionEnum.SET_ID, payload: id}),
    setName: (name: string): SetNameAction => ({type: ChatActionEnum.SET_NAME, payload: name}),
    setDescription: (description: string): SetDescriptionAction => ({type: ChatActionEnum.SET_DESCRIPTION, payload: description}),
    setError: (error: string): SetErrorAction => ({type: ChatActionEnum.SET_ERROR, payload: error}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: ChatActionEnum.SET_IS_LOADING, payload: isLoading}),
    setMessages: (messages: IMessage[]): SetMessagesAction => ({type: ChatActionEnum.SET_MESSAGES, payload: messages}),
    addMessages: (message: IMessage): AddMessageAction => ({type: ChatActionEnum.ADD_MESSAGE, payload: message}),
    setDeleteMessages: (idMessage: string): DeleteMessageAction => ({type: ChatActionEnum.DELETE_MESSAGE, payload: idMessage}),
    setEditMessage: (message: IMessage): SetEditMessageAction => ({type: ChatActionEnum.SET_EDIT_MESSAGE, payload: message}),

    getMessages: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(ChatActionCreators.setIsLoading(true))
            const response = await ChatService.getMassage(id)
            dispatch(ChatActionCreators.setMessages(response.data))
            dispatch(ChatActionCreators.setIsLoading(false))
        }
        catch (e) {
            dispatch(ChatActionCreators.setError("Произошла ошибка при получении сообщений!"))
        }
    },
    editMessage: (idMessage: string, newText: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await ChatService.editMessage(idMessage, newText)
            dispatch(ChatActionCreators.setEditMessage(response.data))
        }
        catch (e){
            dispatch(ChatActionCreators.setError("Произошла ошибка при изменении сообщения!"))
        }
    },
    deleteMessage: (idMessage: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await ChatService.deleteMessage(idMessage)
            if(response.data.statusDelete){
                dispatch(ChatActionCreators.setDeleteMessages(idMessage))
            }
        }
        catch (e){
            dispatch(ChatActionCreators.setError("Произошла ошибка при удалении сообщения!"))
        }
    },
    sendMessage: (chatId: string, text: string) => async (dispatch: AppDispatch) => {
        try {
            const response = await ChatService.sendMessage(chatId, text)
            dispatch(ChatActionCreators.addMessages(response.data))
        }
        catch (e){
            dispatch(ChatActionCreators.setError("Произошла ошибка при отправке сообщения"))
        }
    }
}
