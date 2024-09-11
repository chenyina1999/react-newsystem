import React from 'react'
// import { DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import axios from 'axios'
export default function Home() {
    const getData = () => {
        // 取数据 get
        // axios.get("http://localhost:3000/posts").then(res => {
        //     console.log(res.data);
        // })

        // 增加数据 post
        // axios.post("http://localhost:3000/posts", {
        //     title: '2222',
        //     author: 'chenyina'
        // }).then(res => {
        //     console.log(res.data);
        // })

        // 修改数据 将整个对象替换 put
        // axios.put("http://localhost:3000/posts/1", {
        //     title: '2222---update',
        // })

        // 局部刷新数据 patch
        // axios.patch("http://localhost:3000/posts/1", {
        //     title: '2222---update',
        // }).then(res => {
        //     console.log('res', res)
        // })

        // 删除数据
        // axios.delete("http://localhost:3000/posts/1").then(res => {
        //     console.log(res);
        // })

        // 嵌入数据 
        axios.get("http://localhost:3000/posts?_embed=comments").then(res => {
            console.log(res);
        })
    }
    return (
        <div>
            Home
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} onClick={getData} />
            </Tooltip>
        </div>
    )
}
