/*
 * @Author: 24min
 * @Date: 2020-05-12 20:27:41
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-28 19:37:53
 * @Description: file content
 */
import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { userLogin } from '../../api/service/userService'
import './login.scss';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 12 },
};

/**react 函数 Login */
function Login() {
    let history = useHistory();
    const onFinish = (value) => {
        userLogin(value).then(res => {
            if (res.code === 200) {
                localStorage.setItem('token',res.data)
                history.push('/home')
            } else {
                alert('登录失败')
            }
        })
        console.log('value', value)

    }
    return (
        <div className="login">
            <div className="login-container">
                <Form
                    className="login-form"
                    {...layout}
                    name="basic"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="用户名"
                        name="jobNumber"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
                    </Form.Item>
                    {/* <Form.Item>
                    </Form.Item> */}
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" block>
                            登录
                       </Button>
                       或者 <Link to="register">立即注册<span role="img" aria-label="注册">⚡</span></Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;
