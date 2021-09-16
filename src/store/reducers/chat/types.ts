import {IMessage} from "../../../models/IMessage";

export interface ChatState {
    id: string;
    name: string;
    description: string;
    error: string;
    messages: IMessage[];
    isLoading: boolean
}

export enum ChatActionEnum{
    SET_ID = "SET_ID",
    SET_NAME = "SET_NAME",
    ADD_MESSAGE = "ADD_MESSAGE",
    DELETE_MESSAGE = "DELETE_MESSAGE",
    SET_EDIT_MESSAGE = "SET_EDIT_MESSAGE",
    SET_DESCRIPTION = "SET_DESCRIPTION",
    SET_ERROR = "SET_ERROR",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_MESSAGES = "SET_MESSAGES"
}

export interface SetIdAction{
    type: ChatActionEnum.SET_ID;
    payload: string
}

export interface SetNameAction{
    type: ChatActionEnum.SET_NAME;
    payload: string
}

export interface SetDescriptionAction{
    type: ChatActionEnum.SET_DESCRIPTION;
    payload: string
}

export interface SetErrorAction{
    type: ChatActionEnum.SET_ERROR;
    payload: string
}

export interface SetIsLoadingAction{
    type: ChatActionEnum.SET_IS_LOADING;
    payload: boolean
}

export interface SetMessagesAction{
    type: ChatActionEnum.SET_MESSAGES;
    payload: IMessage[]
}

export interface AddMessageAction{
    type: ChatActionEnum.ADD_MESSAGE;
    payload: IMessage
}

export interface SetEditMessageAction{
    type: ChatActionEnum.SET_EDIT_MESSAGE;
    payload: IMessage
}

export interface DeleteMessageAction{
    type: ChatActionEnum.DELETE_MESSAGE;
    payload: string
}

export type ChatAction =
    SetIdAction | SetNameAction | SetDescriptionAction | SetErrorAction | SetIsLoadingAction | SetMessagesAction | AddMessageAction | SetEditMessageAction | DeleteMessageAction
