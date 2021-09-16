import React, {FC, useState} from 'react';
import {Button, Form, Input, Row} from "antd";
import {rules} from "../../utils/rules";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const ChatForm: FC = () => {
    const {error, id} = useTypedSelector(state => state.chat)
    const [message, setMessage] = useState('')
    const {sendMessage} = useActions()

    const submit = () => {
        sendMessage(id, message)
        setMessage('')
    }
    return (
        <div style={{height: "10%", width: "100%", marginTop: 12}}>
            <Row>
                <div
                    style={{flexGrow: 1}}
                >
                    <Input
                        value={message}
                        onKeyPress={e=>{
                            if(e.key === "Enter"){
                                submit()
                            }
                        }}
                        onChange={(e)=>setMessage(e.target.value)}
                        placeholder="Введите сообщение..."
                    />
                </div>
                <Button style={{height: "100%"}} type="primary" onClick={submit} loading={false}>
                    Отправить
                </Button>
            </Row>
            {error && <div style={{color: "red"}}>
                {error}
            </div>}
        </div>
    );
};

export default ChatForm;
