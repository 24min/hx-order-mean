/*
 * @Author: 24min
 * @Date: 2020-05-19 19:02:49
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-20 20:29:06
 * @Description: 浏览选购商品组件
 */
import React, { useState, useEffect } from 'react'
import { Card,Statistic } from 'antd'
import { getCommdityList } from "../../api/service/commdityService"
import Count from "../../components/count/count"
import "./commodityList.scss"

function CommodityList() {
    const [commodityList, setList] = useState([])
    // const []s
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
            {/* <h1>商品列表    <img src="http://scimg.jianbihuadq.com/tupian/202001/2020010721232154.jpg" width="100%" height="100%"></img></h1>
             */}
            {commodityList.map(item => (
                <Card title={item.name} className="every-commodity" key={item.id} style={{ width: 300 }} hoverable>
                    <img src="http://scimg.jianbihuadq.com/tupian/202001/2020010721232154.jpg" width="100%" height="100%"></img>
                    <Statistic value={item.price} precision={2} suffix="元"/>
                    <Count info={item}></Count>
                </Card>
            ))}

        </div>
    )
}

export default CommodityList;