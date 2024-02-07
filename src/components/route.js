import React, { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import HomePage from './asserts/Home/HomePage';
import { Signup } from './asserts/Signup/Signup';
const Page=()=>
{
    return(
        <>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/sign' element={<Signup/>}/>

        </Routes>
        </>
    )
}
export default Page;