/*
 * @Author: 24min
 * @Date: 2020-05-12 20:27:41
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-12 21:28:49
 * @Description: file content
 */
import React from 'react';
import { useHistory } from "react-router-dom";
import './login.scss';


function Login() {
    let history = useHistory()
    function toRegister() {
        history.push('/register')
    }
    return (
        <div className="login">
            <h1 onClick={toRegister}>登录</h1>
        </div>
    );
}

export default Login;
