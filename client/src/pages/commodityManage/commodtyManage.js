/*
 * @Author: 24min
 * @Date: 2020-05-19 19:02:49
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-26 19:20:12
 * @Description: 商品管理 组件
 */
import React, { useState, useEffect } from 'react'
import { getCommdityList, addCommodity } from "../../api/service/commdityService"
import { Table, Button, Space, Tooltip, Modal, Form, Input, message } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import "./commodityManage.scss"
function CommodityManage() {
    const [form] = Form.useForm();//表单的hooks
    const [commodityList, setList] = useState([]) //商品列表
    const [num, setNum] = useState(0) //发起请求
    const [isShowcreate, setModelFlag] = useState(false)//是否显示对话框
    const [isCreate, setCreateFlag] = useState(false) //当前的对话框是否是 新建
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
                        <Button shape="circle" icon={<EditOutlined />} onClick={() => edit(record)} />
                    </Tooltip>
                    <Tooltip title="删除商品">
                        <Button shape="circle" icon={<DeleteOutlined />} />
                    </Tooltip>
                </Space>
            )
        }
    ]
    const edit = (values) => {
        setModelFlag(true)
        setCreateFlag(false)
        form.setFieldsValue({ ...values })
    }
    /** 点击确认的按钮*/
    const handleOk = (values, type) => {
        if (type === 'create') {
            addCommodity({ ...values, 'price': parseFloat(values.price) }).then(res => {
                if (res.code === 200) {
                    setNum(num + 1)
                    setModelFlag(false)
                    message.success('商品新建成功！')
                    form.resetFields();
                } else {
                    message.error('商品新建失败,请联系开发人员定位问题')
                }
            })
        } else {
            console.log(type)
        }
    }
    /**取消 */
    const handleCancel = () => {
        setModelFlag(false)
    }
    /**打开对话框 */
    const open = () => {
        form.resetFields()
        setCreateFlag(true)
        setModelFlag(true)
    }
    return (
        <>
            <Button type="primary" onClick={open}>添加商品</Button>
            <Table columns={columns} dataSource={commodityList} />
            <Modal
                title={isCreate ? "新建商品" : "修改商品"}
                okText={isCreate ? "添加" : "修改"}
                cancelText="取消"
                maskClosable={false}
                visible={isShowcreate}
                onCancel={handleCancel}
                onOk={() => {
                    form.validateFields().then(values => {
                        handleOk(values, isCreate ? 'create' : 'update');
                    }).catch(info => {
                        message.error('error submit!!!')
                    })
                }}
            >
                <Form form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{}}>
                    <Form.Item
                        name="name"
                        label="商品名称"
                        rules={[
                            {
                                required: true,
                                message: '请输入商品名称',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="uid"
                        label="商品编号"
                        rules={[
                            {
                                required: true,
                                message: '请输入商品名称',
                            },
                        ]}
                    >
                        <Input placeholder="商品编号是唯一的" />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="商品售价"
                        rules={[
                            {
                                required: true,
                                message: '请输入商品名称',
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