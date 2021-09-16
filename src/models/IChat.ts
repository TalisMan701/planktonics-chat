import {IMessage} from "./IMessage";

export interface IChat{
    id: string;
    name: string;
    massages: IMessage[];
}
