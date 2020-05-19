/*
 * @Author: 24min
 * @Date: 2020-05-12 20:27:41
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-19 12:47:32
 * @Description: 主页 
 * 左导航分为  
 * 商品信息(商品列表 商品管理【普通用户无法查看设置服务费等 什么时候开放购买等】 商品统计【普通用户无法查看，比如销量统计】 )
 * 个人信息（我的订单 我的资料 ）
 * 用户管理 【超管 可新增用户 修改用户信息  修改用户角色】
 * 公告管理
 */
import React from 'react';
import { Menu, Row, Col } from 'antd'
import './home.scss';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
const { SubMenu } = Menu;

const navList = [
  {
    name: '商品信息',
    name_en: 'commodityInfo',
    route: '/commodityInfo',
    auth: ['admin', 'user', 'procurement'],
    children: [{
      name: '商品选购',
      name_en: 'commodityList',
      route: '/commodityList',
      auth: ['admin', 'user', 'procurement']
    },
    {
      name: '商品管理',
      name_en: 'commodityManage',
      route: '/commodityManage',
      auth: ['admin', 'procurement']
    },
    {
      name: '商品统计',
      name_en: 'commodityStatic',
      route: '/commodityStatic',
      auth: ['admin', 'procurement']
    }
    ]
  }, {
    name: '个人信息',
    name_en: 'myInfo',
    route: '/myInfo',
    auth: ['admin', 'user', 'procurement'],
    children: [{
      name: '我的订单',
      name_en: 'myOrder',
      route: '/myOrder',
      auth: ['admin', 'user', 'procurement']
    },
    {
      name: '我的资料',
      name_en: 'myData',
      route: '/myData',
      auth: ['admin', 'user', 'procurement']
    }]
  }, {
    name: '用户管理',
    name_en: 'userManage',
    route: '/userManage',
    auth: ['admin'],
    children: []
  },
  {
    name: '公告管理',
    name_en: 'announcementManage',
    route: '/announcementManage',
    auth: ['admin', 'procurement'],
    children: []
  }
]

function Home() {
  return (
    <div className="home">
      <Row>
        <Col span={6}>
          <Menu
            mode="inline"
          >
            {navList.map(item => {
              if (item.children.length > 0) {
                return (<SubMenu key={item.name_en} title={item.name}>
                  {item.children.map(child => {
                    return (<Menu.Item key={child.name_en} >
                      <Link to={child.route}>
                        {child.name}
                      </Link>
                    </Menu.Item>)

                  })}
                </SubMenu>)
              } else {
                return (<Menu.Item key={item.name_en} >
                  <Link to={item.route}>
                    {item.name}
                  </Link>
                </Menu.Item>)
              }
            })}
          </Menu>
        </Col>
        <Col span={18}>
          右边内容
    </Col>
      </Row>
    </div>
  );
}

export default Home;
