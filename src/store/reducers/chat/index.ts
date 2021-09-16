import {IMessage} from "../../../models/IMessage";
import {ChatAction, ChatActionEnum, ChatState} from "./types";
const initialState = {
    id: '',
    name: '',
    description: '',
    error: '',
    messages: [] as IMessage[],
    isLoading: false
}

export default function chatReducer(state = initialState, action: ChatAction): ChatState{
    switch (action.type){
        case ChatActionEnum.SET_ID:
            return {...state, id: action.payload}
        case ChatActionEnum.SET_NAME:
            return {...state, name: action.payload}
        case ChatActionEnum.SET_DESCRIPTION:
            return {...state, description: action.payload}
        case ChatActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case ChatActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case ChatActionEnum.SET_MESSAGES:
            return {...state, messages: action.payload, isLoading: false}
        case ChatActionEnum.ADD_MESSAGE:{
            return {...state, messages: [...state.messages, action.payload]}
        }
        case ChatActionEnum.SET_EDIT_MESSAGE:{
            return {...state, messages: state.messages.map(message => message.id === action.payload.id ? action.payload : message)}
        }
        case ChatActionEnum.DELETE_MESSAGE:{
            return {...state, messages: state.messages.filter(message => message.id !== action.payload)}
        }
        default:
            return state
    }
}
