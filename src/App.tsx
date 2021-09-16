import React, {FC, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import './App.css'
import {useActions} from "./hooks/useActions";
import Sidebar from "./components/Sidebar";
import {useTypedSelector} from "./hooks/useTypedSelector";

const App:FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    const {checkAuth} = useActions()
    useEffect(()=>{
        checkAuth()
    },[])
  return (
    <Layout style={{overflow: "hidden"}}>
        <Navbar/>
        <Layout>
            {isAuth &&
			    <Sidebar/>
            }
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    </Layout>
  );
}

export default App;
