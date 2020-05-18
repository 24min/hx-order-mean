/*
 * @Author: 24min
 * @Date: 2020-05-12 20:27:41
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-18 18:13:32
 * @Description: file content 用户名 邮箱 工号（n） 性别 手机 密码 组织 生日（n）
 */
import React from 'react';
import { Link, useHistory } from "react-router-dom";

import { Form, Input, Button, Tooltip, Radio, DatePicker, message } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons';

import { addUser } from "../../api/service/userService"
import './register.scss';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 12 },
};
/**注册的React 函数 */
function Register() {
  let history = useHistory()
  /**表单提交函数 */
  const onFinish = (value) => {

    const result = {
      ...value,
      'brith': value.brith.format('YYYY-MM-DD')
    }
    console.log('value', result)
    addUser(result).then(res => {
      if (res.code == 200) {
        message.success({ content: '注册成功!' })
        history.push('/login')
      } else {
        message.error({ content: '注册失败,请联系开发人员查看!' })
      }
    })
    // history.push('/home')
  }
  return (
    <div className="register">
      {/* <h1>注册</h1> */}
      <div className="register-container">
        <Form
          className="register-form"
          {...layout}
          name="register"
          onFinish={onFinish}
          initialValues={
            {
              sex: 'male'
            }
          }
        >
          <Form.Item label={<span>
            工号&nbsp;
            <Tooltip title="在登录的时候使用，不允许重复。建议使用‘公司前缀_数字’的形式">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>} name="jobNumber" rules={[{ required: true, message: '请输入你的工号!' }]}>
            <Input placeholder="请输入你的工号"></Input>
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入你的密码！',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请确认你的密码！',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('两次密码输入不一致！');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="真实姓名" name="username" rules={[{ required: true, message: '请输入你的真实姓名!' }]}>
            <Input placeholder="请输入你的真实姓名"></Input>
          </Form.Item>
          <Form.Item label="邮箱" name="email" rules={[
            {
              type: 'email',
              message: '邮箱格式错误!',
            },
            {
              required: true,
              message: '请输入你的邮箱！',
            },
          ]}>
            <Input placeholder="请输入你的邮箱" />
          </Form.Item>
          <Form.Item name="sex" label="性别">
            <Radio.Group>
              <Radio value="male">男&nbsp;<span role="img" aria-label="男孩">👦</span></Radio>
              <Radio value="female">女&nbsp;<span role="img" aria-label="女孩">👧</span></Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="手机" name="phone">
            <Input placeholder="请输入你的手机号"></Input>
          </Form.Item>
          <Form.Item label="组织" name="company">
            <Input placeholder="请输入你的单位"></Input>
          </Form.Item>
          <Form.Item label="生日" name="brith">
            <DatePicker />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" block>
              注册
                       </Button>
                       或者 <Link to="login">返回登录<span role="img" aria-label="注册">⚡</span></Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
