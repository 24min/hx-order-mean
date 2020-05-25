/*
 * @Author: 24min
 * @Date: 2020-05-23 12:47:09
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-23 13:35:46
 * @Description: file content
 */
import React from 'react'

import { useMappedState } from "redux-react-hook"
import './car.scss'

function Car() {
    const counter = useMappedState(state => state);
    let totalPrice = counter.reduce((acc, cur) =>
        acc + cur.price * cur.num
        , 0)
    return (
        <div className="car">
            您一共选择了{counter.length}种商品,共{totalPrice}元
        </div>
    )
}

export default Car