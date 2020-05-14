/*
 * @Author: 24min
 * @Date: 2020-05-12 20:27:41
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-14 22:35:39
 * @Description: file content
 */
import React from 'react';
import { Link } from "react-router-dom";
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.scss';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (value) => {
    console.log('value', value)
}
/**react 函数 Login */
function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="用户名"
                        name="userName"
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
