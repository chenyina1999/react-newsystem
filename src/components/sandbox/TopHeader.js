import React, { useState } from 'react'
import { Layout, Button, theme, Dropdown, Space } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined, SmileOutlined
} from '@ant-design/icons';

const { Header } = Layout;

export default function TopHeader() {
    const [collapsed, setCollapsed] = useState(false);
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
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
            <div style={{ float: "right" }}>
                <span style={{  }}>
                    欢迎admin回来
                </span>
                <Dropdown menu={{ items }}>
                    {/* <a onClick={(e) => e.preventDefault()}>
                        
                    </a> */}
                    <Space>
                        {/* Hover me */}
                        {/* <DownOutlined /> */}
                        <UserOutlined style={{ fontSize: '25px' }}/>
                    </Space>
                </Dropdown>
            </div>

        </Header>
    )
}
