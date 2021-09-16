import {AuthActionCreators} from "./auth/action-creators";
import {ChatActionCreators} from "./chat/action-creators";


export const allActionCreators = {
    ...AuthActionCreators,
    ...ChatActionCreators
}
