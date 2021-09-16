import React from "react";
import Login from "../pages/Login";
import Start from "../pages/Start";
import ChatContainer from "../components/Chat/ChatContainer";

export interface IRoute{
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    CHAT = '/chat',
    WELCOME = '/'
}

export const publicRouters: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRouters: IRoute[] = [
    {path: RouteNames.WELCOME, exact: true, component: Start},
    {path: RouteNames.CHAT, exact: true, component: ChatContainer}
]
