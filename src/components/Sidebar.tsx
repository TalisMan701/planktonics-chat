import { Menu, Layout } from 'antd';
import React, {FC} from 'react';
import {RouteNames} from "../routers";
import {useHistory} from "react-router-dom";
import {useActions} from "../hooks/useActions";

const Sidebar: FC = () => {
    const router = useHistory()
    const {setId, setName, setDescription, setError} = useActions()
    return (
        <Layout.Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item
                    key="1"
                    onClick={()=>{
                        setId("61420e2c341aae384410455a")
                        setName("Чат для обсуждения рабочих вопросов")
                        setDescription("В данном чате пишем исключительно по рабочим вопросам, чтобы избежать потери важной информации. Для общения есть флудилка :)")
                        setError("")
                        router.push(RouteNames.CHAT)
                    }}
                >
                    Работа
                </Menu.Item>
                <Menu.Item
                    key="2"
                    onClick={()=>{
                        setId("61420e35341aae384410455c")
                        setName("Чат для общения и сплочения")
                        setDescription("Если вам скучно, пишите, не стесняйтесь!")
                        setError("")
                        router.push(RouteNames.CHAT)
                    }}
                >
                    Флудилка
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    );
};

export default Sidebar;
