/*
 * @Author: 24min
 * @Date: 2020-05-20 19:59:21
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-20 20:29:29
 * @Description: 数量组件
 */
import React, { useState } from 'react'
import {
    PlusCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';

function Count(props) {
    console.log('coount',props)
    const [num, setNum] = useState(0)
    
    const changeNum = (type = "add") => {
        if (type === 'add') {
            setNum(num + 1)
        } else {
            setNum(num - 1)
        }
    }
    return (
        <div className="count">
            <MinusCircleOutlined onClick={() => changeNum('decrease')} />{num}<PlusCircleOutlined onClick={() => changeNum('add')} />
        </div>
    )
}
export default Count