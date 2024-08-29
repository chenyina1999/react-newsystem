import React from 'react';
import SideMenu from '../../components/sandbox/SideMenu';
import TopHeader from '../../components/sandbox/TopHeader'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './home/Home';
import UserList from './user-manage/UserList';
import RightList from './right-manage/RightList';
import RoleList from './right-manage/RoleList';
import NoPermission from './nopermission/NoPermission'
// import { DatePicker } from 'antd';
import { Layout, theme } from 'antd';
const { Content } = Layout;

export default function NewSandBox() {
    // const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{height: '100%'}}>
            <SideMenu></SideMenu>
            <Layout>
                <TopHeader></TopHeader>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/user-manage/UserList" element={<UserList />}></Route>
                        <Route path="/right-manage/RoleList" element={<RoleList />}></Route>
                        <Route path="/right-manage/RightList" element={<RightList />}></Route>
                        <Route path="/" element={<Navigate to="/home" />} exact />
                        <Route path="*" element={<NoPermission />}></Route>
                    </Routes>
                    {/* <DatePicker /> */}
                </Content>
            </Layout>
        </Layout>
    )
}
