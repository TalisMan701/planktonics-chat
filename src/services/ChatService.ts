import {AxiosResponse} from "axios";
import api from "../http";
import {IMessage} from "../models/IMessage";
import {ChatResponse} from "../models/response/ChatResponse";

export default class ChatService {
    static async getMassage(chatId: string): Promise<AxiosResponse<IMessage[]>> {
        return api.get<IMessage[]>(`/users/getAllMessageByIdChat/${chatId}`)
    }
    static async editMessage(idMessage: string, newText: string): Promise<AxiosResponse<IMessage>> {
        return api.post<IMessage>(`/users/editMessageByIdMessage/${idMessage}`, {text: newText})
    }
    static async deleteMessage(idMessage: string): Promise<AxiosResponse<ChatResponse>> {
        return api.get<ChatResponse>(`/users/deleteMessageById/${idMessage}`)
    }
    static async sendMessage(chatId: string, text: string): Promise<AxiosResponse<IMessage>> {
        return api.post<IMessage>(`/users/sendMessageByIdChat`, {chatId, text})
    }
}
