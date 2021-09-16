import React, {FC, useState} from 'react';
import {Card, Input, Modal, Timeline} from "antd";
import {IMessage} from "../../models/IMessage";
import ChatForm from "./ChatForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {CloseOutlined, EditOutlined} from "@ant-design/icons"
import moment from "moment";
import {useActions} from "../../hooks/useActions";

interface ChatProps{
    messages: IMessage[];
    isLoading: boolean
}

const Chat: FC<ChatProps> = (props) => {
    const {user} = useTypedSelector(state => state.auth)
    const [isEdit, setIsEdit] = useState(false)
    const [editedMessage, setEditedMessage] = useState({} as IMessage)
    const [newTextMessage, setNewTextMessage] = useState('')
    const {deleteMessage, editMessage} = useActions()

    const handleOk = () => {

        setIsEdit(false)
        editMessage(editedMessage.id, newTextMessage)
    };

    const handleCancel = () => {
        setIsEdit(false);
    };

    return (
        <>
            <Card style={{overflowY: "scroll", overflowX: "hidden", padding: 16, height: "70%", width: "100%"}}>
                {props.messages.length !== 0
                    ?
                        <Timeline mode="alternate">
                        {props.messages.map((item, index) => {
                            let date = new Date(item.date)
                            return(
                                <Timeline.Item
                                    key={`mes${index}`}
                                    position={item.userLogin === user.login ? "left" : "right"}
                                    dot={<img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/21760012/original/d4c0c142f91f012c9a8a9c9aeef3bac28036f15b/create-your-cartoon-style-flat-avatar-or-icon.jpg" style={{width: 32, height: 32, borderRadius: "50%"}} alt=""/>}
                                >
                                    <div className={"contentMessage"} style={{position: "relative", paddingTop: 8, paddingBottom: 8}}>
                                        <div style={{padding: 12, borderWidth: 1, borderColor: "#1890ff", backgroundColor: "#edf9ff", borderStyle: "solid", borderRadius: 5}}>
                                            <p style={{width: "100%", textAlign: "start"}}>{item.text}</p>
                                        </div>
                                        {item.userLogin === user.login &&
                                            <>
												<EditOutlined
													onClick={()=> {
                                                        setIsEdit(true)
                                                        setEditedMessage(item)
                                                        setNewTextMessage(item.text)
                                                    }}
													className={"iconChat--hover"}
													style={{position: "absolute", top: 14, right: 28}}
												/>
												<CloseOutlined
													onClick={()=>{deleteMessage(item.id)}}
													className={"iconChat--hover"}
													style={{position: "absolute", top: 14, right: 8}}
												/>
                                            </>
                                        }
                                        <span style={{marginRight: 4, fontSize: 12, color: "#444", fontWeight: "bold", position: "absolute", left: 8, top: -10}}>{item.userLogin}</span>
                                        <span style={{fontSize: 10, position: "absolute", right: 8, bottom: -8}}>{moment(date).fromNow()}</span>
                                    </div>
                                </Timeline.Item>
                            )
                        })}
                    </Timeline>
                    :
                        <div>
                            <p>Нет сообщений. Будь первым :)</p>
                        </div>
                }

            </Card>
            <ChatForm/>
            <Modal title="Редактирование сообщения" visible={isEdit} onOk={handleOk} onCancel={handleCancel}>
                <p>Давайте поменяем Ваше сообщение</p>
                <Input value={newTextMessage} onChange={(e)=>setNewTextMessage(e.target.value)}/>
            </Modal>
        </>
    );
};

export default Chat;
