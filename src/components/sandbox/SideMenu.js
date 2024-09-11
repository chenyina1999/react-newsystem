import React, { useState, useEffect } from 'react'
import './index.css'
import { Layout } from 'antd';
import axios from 'axios';
// import {
//     UserOutlined,
//     NotificationOutlined,
//     TableOutlined,
//     LaptopOutlined,
//     UnorderedListOutlined,
//     SettingOutlined,
//     SaveOutlined,
//     AuditOutlined,
//     VideoCameraAddOutlined
// } from '@ant-design/icons';
import * as AntIcons from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;

export default function SideMenu() {
    const location = useLocation();
    const selectKeys = [location.pathname]; 
    const defaultOpenKeys = ['/' + location.pathname.split("/")[1]];


    const [collapsed] = useState(false);
    const addIconToMenu = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].icon) {
                arr[i].icon = React.createElement(AntIcons[arr[i].icon]);
            }
        }
        return arr;

    }


    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/rights").then((res) => {
            let temp = addIconToMenu(res.data);

            temp.forEach(item => {
                if (item?.children.length === 0) {
                    delete item.children
                }
            })
            console.log(temp);
            setMenuItems(temp);
        })
    }, [])


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
            else if (menuItems[i].children) {
                activeItem = findKey(key, menuItems[i].children);
                if (activeItem) {
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
            navigate(selectedItem.key, {
                replace: true
            });
        }
    };
    return (
        // <div>
        <Sider trigger={null} collapsible={true} collapsed={collapsed} style={{
            borderRadius: "4px"
        }}>
            <div style={{
                display: "flex", height: "100%", flexDirection: "column"
            }}>
                <div className="demo-logo-vertical">
                    全球新闻发布管理系统
                </div>
                <div style={{ overflow: "auto", flex: 1 }}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={selectKeys}
                        defaultOpenKeys={defaultOpenKeys}
                        onClick={handleMenuOnClick}
                        items={menuItems}
                    />  
                </div>

            </div>

        </Sider>
        // </div>

    )
}
