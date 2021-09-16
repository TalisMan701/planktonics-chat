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
    }
    return (
        <div style={{height: "10%", width: "100%", marginTop: 12}}>
            <Form
                onFinish={submit}
            >
                <Row>
                    <Form.Item
                        style={{flexGrow: 1}}
                        name="messageText"
                        rules={[rules.required('Нельзя отправлять пустое сообщение!')]}
                    >
                        <Input.TextArea
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                            placeholder="Введите сообщение..."
                            autoSize={{ minRows: 1, maxRows: 2}}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button style={{height: "100%"}} type="primary" htmlType="submit" loading={false}>
                            Отправить
                        </Button>
                    </Form.Item>
                </Row>
                {error && <div style={{color: "red"}}>
                    {error}
				</div>}
            </Form>
        </div>
    );
};

export default ChatForm;
