import React from 'react'
// import { DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
// import axios from 'axios'
import { useRef } from 'react';
import Drag from "../drag/Drag";

import axiosInstance from '@/api/axiosInstance.js';
import ErrorBoundary from './ErrorBoundary';
export default function Home() {
    // const handleClick = () => {
    //     // 取数据 get
    //     // axios.get("http://localhost:3000/posts").then(res => {
    //     //     console.log(res.data);
    //     // })

    //     // 增加数据 post
    //     // axios.post("http://localhost:3000/posts", {
    //     //     title: '2222',
    //     //     author: 'chenyina'
    //     // }).then(res => {
    //     //     console.log(res.data);
    //     // })

    //     // 修改数据 将整个对象替换 put
    //     // axios.put("http://localhost:3000/posts/1", {
    //     //     title: '2222---update',
    //     // })

    //     // 局部刷新数据 patch
    //     // axios.patch("http://localhost:3000/posts/1", {
    //     //     title: '2222---update',
    //     // }).then(res => {
    //     //     console.log('res', res)
    //     // })

    //     // 删除数据
    //     // axios.delete("http://localhost:3000/posts/1").then(res => {
    //     //     console.log(res);
    //     // })

    //     // 嵌入数据 
    //     // axios.get("http://localhost:5000/posts?_embed=comments").then(res => {
    //     //     console.log(res);
    //     // })

    // }
    const ref = useRef(0);
    const myRef = useRef(null);
    const inputRef = useRef(null);
    // React 会把对该节点的引用放入 myRef.current

    let handleClick = () => {
        ref.current = ref.current + 1;
        // alert('点击了 ' + ref.current + ' 次！');
        console.log(myRef.current);
        myRef.current.scrollIntoView();

    }
    const handleFocus = () => {
        inputRef.current.focus();
    }

    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);
    const handleScrollToFirstCat = () => {
        firstCatRef.current.scrollIntoView(true)
    }
    const handleScrollToSecondCat = () => {
        secondCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',

            inline: 'center'
        })
    }
    const handleScrollToThirdCat = () => {
        thirdCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
    

    return (
        <div>
            

            <ErrorBoundary>
                <Drag />
            </ErrorBoundary>
            {/* <div ref={myRef}></div> */}
            {/* Home */}
            {/* <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} onClick={handleClick} />
            </Tooltip>

            <input ref={inputRef} />
            <button onClick={handleFocus}>聚焦输入框</button>

            <br></br> */}


            {/* 滚动至一个元素demo */}

            {/* <>
                <nav>
                    <button onClick={handleScrollToFirstCat}>
                        Neo
                    </button>
                    <button onClick={handleScrollToSecondCat}>
                        Millie
                    </button>
                    <button onClick={handleScrollToThirdCat}>
                        Bella
                    </button>
                </nav>
                <div>
                    <ul>
                        <li>
                            <img
                                src="https://placecats.com/neo/300/200"
                                alt="Neo"
                                ref={firstCatRef}
                            />
                        </li>
                        <li>
                            <img
                                src="https://placecats.com/millie/200/200"
                                alt="Millie"
                                ref={secondCatRef}
                            />
                        </li>
                        <li>
                            <img
                                src="https://placecats.com/bella/199/200"
                                alt="Bella"
                                ref={thirdCatRef}
                            />
                        </li>
                    </ul>
                </div>
            </> */}


        </div>
    )
}
