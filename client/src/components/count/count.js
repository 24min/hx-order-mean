/*
 * @Author: 24min
 * @Date: 2020-05-20 19:59:21
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-20 21:47:19
 * @Description: 数量组件
 */
import React, { useState, useReducer } from 'react'
import {
    PlusCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';

import { commodityReducer } from "../../reduer/reduer"

function Count(props) {
    const [state, dispatch] = useReducer(commodityReducer, [{num:0}]);
    // const [num, setNum] = useState(0)

    // const changeNum = (type = "add") => {
    //     if (type === 'add') {
    //         setNum(num + 1)
    //     } else {
    //         setNum(num - 1)
    //     }
    // }
    return (
        <div className="count">
            <MinusCircleOutlined onClick={() => dispatch({ type: 'decrement', info: { ...props.info } })} />{state[0].num}<PlusCircleOutlined onClick={() => dispatch({ type: 'increment', info: { ...props.info } })} />
        </div>
    )
}
export default Count