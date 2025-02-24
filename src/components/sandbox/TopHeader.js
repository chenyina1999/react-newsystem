// import React, { useState } from 'react'
import React from 'react'

import { Layout, Button, theme, Dropdown, Space } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined, SmileOutlined
} from '@ant-design/icons';

const { Header } = Layout;

function TopHeader(props) {
    console.log('props', props)
    const navigate = useNavigate();
    const location = useLocation();
    console.log('navigate、location', navigate, location);
    // const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items = [
        {
            key: '1',
            label: (
                <span>
                    超级管理员
                </span>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            ),
            icon: <SmileOutlined />,
            disabled: true,
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            ),
            disabled: true,
        },
        {
            key: '4',
            danger: true,
            label: '退出',
        },
    ];
    const changeCollapsed = () => {
        // 改变 state 的 isCollapsed状态
        props.changeCollapsed();
    }
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
                type="text"
                icon={props.isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={changeCollapsed}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
            <div style={{ float: "right" }}>
                <span style={{}}>
                    欢迎admin回来
                </span>
                <Dropdown menu={{ items }}>
                    {/* <a onClick={(e) => e.preventDefault()}>
                        
                    </a> */}
                    <Space>
                        {/* Hover me */}
                        {/* <DownOutlined /> */}
                        <UserOutlined style={{ fontSize: '25px' }} />
                    </Space>
                </Dropdown>
            </div>

        </Header>
    )
}
// 传递给connect 的第一个参数，
// mapStateToProps 用于从store中选择出连接组件需要的那部分数据。它经常被简称为mapState 
// 1、每次store state 变更都会被调用它 2、它接收整个store state，并应返回组件所stro需的数据对象。
const mapStateToProps = (state) => {
    console.log('state', state );
    const { isCollapsed } = state.collapse;
    return {
        isCollapsed
    }

}
// dispatch actions 给store
const mapDispatchToProps = {
    // ... 通常是一个充满 action creators 的 object
    changeCollapsed() {
        return {
            type: "change_collapsed"
        }
    }
};

// `connect` 返回一个接收要包装的组件的新函数：
// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// 并且该函数返回连接的，包装的组件：
// const ConnectedComponent = connectToStore(Component);

// 通常我们会将两者一步完成，像这样：
export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
