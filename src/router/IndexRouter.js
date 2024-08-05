// import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../views/login/Login';
import NewSandBox from '../views/sandbox/NewSandBox';


export default function IndexRouter() {
   
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" loader={() => {
                    localStorage.getItem("token") ?  redirect("/redirect") : redirect("/login")
                }}></Route> */}
                <Route path="/" element={<NewSandBox/>}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
