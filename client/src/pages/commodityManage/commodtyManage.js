/*
 * @Author: 24min
 * @Date: 2020-05-19 19:02:49
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-23 15:59:24
 * @Description: 商品管理 组件
 */
import React, { useState, useEffect } from 'react'
import { getCommdityList } from "../../api/service/commdityService"
import { Table, Button, Space, Tooltip } from 'antd'
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
    const [commodityList, setList] = useState([])
    const [num, setNum] = useState(0)
    useEffect(() => {
        getCommdityList().then(res => {
            if (res.code === 200) {
                res.data.forEach(item => item.key = item.uid)
                setList([...res.data])
            } else {
                alert('请求失败')
            }
        })
    }, [num])


    return (
        <Table columns={columns} dataSource={commodityList} />
    )
}

export default CommodityManage;