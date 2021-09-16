import React, {FC} from 'react';
import {Layout,Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import { RouteNames } from '../routers';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Logo from "./Logo";

const Navbar: FC = () => {
    const router = useHistory()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()
    return (
        <Layout.Header>
            <Row justify={"space-between"}>
                <Logo/>
                {isAuth
                    ?
                    <Row>
                        <div style={{color: "white", marginRight: 8}}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>

                            <Menu.Item
                                key="1"
                                onClick={logout}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </Row>
                    :
                    <Menu style={{minWidth: '200px', justifyContent: "flex-end"}} theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            key="1"
                            onClick={()=>router.push(RouteNames.LOGIN)}
                        >
                            Логин
                        </Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
