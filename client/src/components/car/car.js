/*
 * @Author: 24min
 * @Date: 2020-05-23 12:47:09
 * @LastEditors: 24min
 * @LastEditTime: 2020-06-09 20:43:56
 * @Description: file content
 */
import React, { useState } from 'react'

import { useMappedState } from "redux-react-hook"
import { Badge, Tooltip, Button, Modal, Alert } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import Count from "../count/count"

import './car.scss'

function Car() {
    const [showDialog, setStatus] = useState(false)
    const counter = useMappedState(state => state);
    let totalPrice = counter.reduce((acc, cur) =>
        acc + cur.price * cur.num
        , 0)
    let allCount = counter.reduce((acc, cur) =>
        acc + cur.num
        , 0)
    const handleOk = () => { }
    const style = { float: 'right' }
    return (
        <div className="car">
            <Badge count={allCount}>
                <Tooltip title={`您一共选择了${counter.length}种商品， 共${totalPrice}元`}>
                    <Button shape="circle" icon={<ShoppingCartOutlined />} size="large" onClick={() => setStatus(true)} />
                </Tooltip>
            </Badge>
            <Modal
                title="购物车详情"
                visible={showDialog}
                onOk={handleOk}
                onCancel={() => setStatus(false)}
            >
                <Alert message={`您一共选择了${counter.length}种商品，共${allCount}件商品，合计共${totalPrice}元`} type="info" showIcon />
                {counter.map(item => (
                    <div key={item.id} className="list">
                        <div className="name">{item.name}</div>
                        <div className="car-counter">
                            <Count info={item}></Count>
                        </div>
                    </div>
                ))}

            </Modal>
        </div>
    )
}

export default Car