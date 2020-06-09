/*
 * @Author: 24min
 * @Date: 2020-05-23 12:47:09
 * @LastEditors: 24min
 * @LastEditTime: 2020-06-09 19:25:18
 * @Description: file content
 */
import React from 'react'

import { useMappedState } from "redux-react-hook"
import { Badge, Tooltip, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import './car.scss'

function Car() {
    const counter = useMappedState(state => state);
    let totalPrice = counter.reduce((acc, cur) =>
        acc + cur.price * cur.num
        , 0)
    let allCount = counter.reduce((acc, cur) =>
        acc + cur.num
        , 0)
    return (
        <div className="car">
            <Badge count={allCount}>
                <Tooltip title={`您一共选择了${counter.length}种商品， 共${totalPrice}元`}>
                    <Button shape="circle" icon={<ShoppingCartOutlined />} size="large" />
                </Tooltip>
            </Badge>
        </div>
    )
}

export default Car