/*
 * @Author: 24min
 * @Date: 2020-05-19 19:02:49
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-25 21:12:16
 * @Description: 商品管理 组件
 */
import React, { useState, useEffect } from 'react'
import { getCommdityList } from "../../api/service/commdityService"
import { Table, Button, Space, Tooltip, Modal, Form, Input } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import "./commodityManage.scss"
const edit = () => {
    console.log('sssssssssssssssssssssss')
    // alert('修改')
}
const columns = [
    {
        title: '商品名',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '售价',
        dataIndex: 'price',
        key: 'price'
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status'
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Tooltip title="修改商品信息">
                    <Button shape="circle" icon={<EditOutlined />} onClick={() => edit()} />
                </Tooltip>
                <Tooltip title="删除商品">
                    <Button shape="circle" icon={<DeleteOutlined />} />
                </Tooltip>
            </Space>
        )

    }
]
function CommodityManage() {
    const [form] = Form.useForm();//表单的hooks
    const [commodityList, setList] = useState([]) //商品列表
    const [num, setNum] = useState(0) //发起请求
    const [isShowcreate, setModelFlag] = useState(false)//是否显示对话框
    useEffect(() => { //副作用函数
        getCommdityList().then(res => {
            if (res.code === 200) {
                res.data.forEach(item => item.key = item.uid)
                setList([...res.data])
            } else {
                alert('请求失败')
            }
        })
    }, [num])
    /** 点击确认的按钮*/
    const handleOk = () => {
        console.log('ok')
        setNum(num + 1)
        setModelFlag(false)
    }
    /**取消 */
    const handleCancel = () => {
        setModelFlag(false)
    }
    /**打开对话框 */
    const open = () => {
        setModelFlag(true)
    }
    return (
        <>
            <Button type="primary" onClick={open}>Primary</Button>
            <Table columns={columns} dataSource={commodityList} />
            <Modal
                title="新建商品"
                maskClosable={false}
                visible={isShowcreate}
                onCancel={handleCancel}
                onOk={handleOk}
            >
                <Form form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{}}>
                    <Form.Item
                        name="商品名称"
                        label="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title of collection!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default CommodityManage;