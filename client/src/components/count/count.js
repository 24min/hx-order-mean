/*
 * @Author: 24min
 * @Date: 2020-05-20 19:59:21
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-26 19:21:33
 * @Description: 数量组件
 */
import React from 'react'
import {
    PlusCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';

import { useMappedState, useDispatch } from "redux-react-hook"
function Count(props) {
    let num = 0;
    const counter = useMappedState(state => state);
    const dispatch = useDispatch();
    let find = counter.find(item => item.uid === props.info.uid)
    if (find) {
        num = find.num
    }
    console.log('count', counter)
    console.log(props.info.uid, num)
    return (
        <div className="count">
            {num === 0 ? '' : <MinusCircleOutlined onClick={() => dispatch({ type: "DECREMENT", info: { ...props.info } })} />}{num}<PlusCircleOutlined onClick={() => dispatch({ type: "INCREMENT", info: { ...props.info } })} />
        </div>
    )
}
export default Count