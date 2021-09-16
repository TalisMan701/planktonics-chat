import React, {FC, useEffect} from 'react';
import {Layout, Row} from "antd";
import Chat from "./Chat";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";


const ChatContainer: FC = () => {
    const {id, name, description, isLoading, messages} = useTypedSelector(state => state.chat)
    const {getMessages} = useActions()
    useEffect(()=>{
        getMessages(id)
    },[id])
    if(isLoading){
        return(
            <Layout>
                <Row className={"h100"} justify={"center"}>
                    Loading...
                </Row>
            </Layout>
        )
    }
    return (
        <Layout className={"h100"}>
            <Row style={{height: "100%", padding: 16}}>
                <div style={{height: "20%"}}>
                    <h2 style={{width: "100%"}}>{name}</h2>
                    <p style={{width: "100%"}}>{description}</p>
                </div>

                <Chat
                    messages={messages}
                    isLoading={isLoading}
                />
            </Row>
        </Layout>
    );
};

export default ChatContainer;
