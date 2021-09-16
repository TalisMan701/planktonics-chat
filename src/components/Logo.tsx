import React, {FC} from 'react';
import {RouteNames} from "../routers";
import {useHistory} from "react-router-dom";

const Logo: FC = () => {
    const router = useHistory()
    return (
        <div
            style={{fontSize: 24, color: "#fff", cursor: "pointer"}}
            onClick={()=>router.push(RouteNames.WELCOME)}
        >
            Planktoniks
        </div>
    );
};

export default Logo;
