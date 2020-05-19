/*
 * @Author: 24min
 * @Date: 2020-05-19 19:02:49
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-19 20:55:06
 * @Description: 浏览选购商品组件
 */
import React, { useState, useEffect } from 'react'

import { getCommdityList } from "../../api/service/commdityService"
import "./commodityList.scss"

function CommodityList() {
    const [commodityList, setList] = useState([])
    useEffect(() => {
        getCommdityList().then(res => {
            if (res.code === 200) {
                setList([...res.data])
            } else {
                alert('请求失败')
            }
        })
    }, [])
    return (
        <div className="commodity">
            <h1>商品列表</h1>
        </div>
    )
}

export default CommodityList;