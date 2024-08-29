import React, { useState } from 'react'
import './index.css'
import { Layout } from 'antd';
import {
    UserOutlined,
    // NotificationOutlined,
    TableOutlined,
    LaptopOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;
export default function SideMenu() {
    const [collapsed] = useState(false);
    // 在这里一般由后端返回数据后再做处理，拼接
    const menuItems = [
        {
            key: '1',
            icon: <LaptopOutlined />,
            label: '首页',
            path: '/'
        }, {
            key: '2',
            icon: <UserOutlined />,
            label: '用户管理',
            path: '/user-manage/UserList',
            children: [
                {
                    key: '3',
                    label: `用户列表`,
                    icon: <UnorderedListOutlined />,
                    path: '/user-manage/UserList',
                }
            ]
        }, {
            key: '4',
            icon: <UserOutlined />,
            label: '权限管理',
            path: '/right-manage/RoleList',
            children: [
                {
                    key: '5',
                    label: `角色列表`,
                    icon: <TableOutlined />,
                    path: '/right-manage/RoleList',
                }, {
                    key: '6',
                    label: `权限列表`,
                    icon: <UnorderedListOutlined />,
                    path: '/right-manage/RightList'
                }
            ]
        },
    ]
    const navigate = useNavigate();
    // 递归写法
    /**
     * 
     * @param {*} key 要打开的菜单key
     * @param {*} menuItems 菜单列表
     * @returns 对应的菜单对象
     */
    const findKey = (key, menuItems) => {
        let activeItem = null;
        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].key === key) {
                activeItem = menuItems[i];
                break;
            }
            if (menuItems[i].children) {
                activeItem = findKey(key, menuItems[i].children);
                if(activeItem){
                    break;
                }
            }
        }
        return activeItem;
    }
    const handleMenuOnClick = (e) => {
        console.log(e);
        let key = e.key;
        const selectedItem = findKey(key, menuItems)
        if (selectedItem) {
            navigate(selectedItem.path, {
                replace: true
            });
        }
    };
    return (
        // <div>
        <Sider trigger={null} collapsible={true} collapsed={collapsed}>
            <div className="demo-logo-vertical">
                全球新闻发布管理系统
            </div>  

            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                defaultOpenKeys={['4']}
                onClick={handleMenuOnClick}
                items={menuItems}
            />
        </Sider>
        // </div>

    )
}
