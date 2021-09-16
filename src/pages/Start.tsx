import React, {FC} from 'react';
import {Layout, Row} from "antd";

const Start: FC = () => {
    return (
        <Layout>
            <Row justify={"center"} align={"middle"} className={"h100"}>
                Welcome to chat service your company!
            </Row>
        </Layout>
    );
};

export default Start;
