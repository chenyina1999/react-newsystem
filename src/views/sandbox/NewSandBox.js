import React from 'react';
import SideMenu from '../../components/sandbox/SideMenu';
import TopHeader from '../../components/sandbox/TopHeader'
import ContentRouter from './contentRouter/ContentRouter'
// import { Route, Routes, Navigate } from 'react-router-dom';

// import { DatePicker } from 'antd';
import { Layout, theme } from 'antd';
const { Content } = Layout;

export default function NewSandBox() {
    // const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{ height: '100%' }}>
            <SideMenu></SideMenu>
            <Layout>
                <TopHeader></TopHeader>
                <Content
                    style={{
                        overflow: 'scroll',
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <ContentRouter></ContentRouter>
                    {/* <Spin size="large" spinning={false}>
                        <Routes>
                            <Route path="/home" element={<Home />}></Route>
                            <Route path="/user-manage/UserList" element={<UserList />}></Route>
                            <Route path="/right-manage/RoleList" element={<RoleList />}></Route>
                            <Route path="/right-manage/RightList" element={<RightList />}></Route>
                            <Route path="/" element={<Navigate to="/home" />} exact />
                            <Route path="*" element={<NoPermission />}></Route>
                        </Routes>
                    </Spin> */}

                    {/* <DatePicker /> */}
                </Content>
            </Layout>
        </Layout>
    )
}

