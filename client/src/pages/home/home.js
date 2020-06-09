/*
 * @Author: 24min
 * @Date: 2020-05-12 20:27:41
 * @LastEditors: 24min
 * @LastEditTime: 2020-06-09 18:55:31
 * @Description: 主页 
 * 左导航分为  
 * 商品信息(商品列表 商品管理【普通用户无法查看设置服务费等 什么时候开放购买等】 商品统计【普通用户无法查看，比如销量统计】 )
 * 个人信息（我的订单 我的资料 ）
 * 用户管理 【超管 可新增用户 修改用户信息  修改用户角色】
 * 公告管理
 */
import React from 'react';
import {
  Switch,
  Route,
  Redirect, Link
} from "react-router-dom";
import { Menu, Row, Col } from 'antd'

import CommodityList from '../commodity/commodityList'
import MyOrder from '../myOrder/myOrder'
import MyInfo from '../myInfo/myInfo'
import UserManage from '../userManage/userManage'
import CommodityManage from '../commodityManage/commodtyManage'
import AnnouncementManage from '../announcementManage/announcementManage'
import NoMatch from '../../components/noMatch/noMatch'
import Car from '../../components/car/car'

import './home.scss';



const { SubMenu } = Menu;

const navList = [
  {
    name: '商品选购',
    name_en: 'commodityList',
    route: '/commodityList',
    auth: ['admin', 'user', 'procurement'],
    children: []
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
      name: '我的信息',
      name_en: 'myInfo',
      route: '/myInfo',
      auth: ['admin', 'user', 'procurement']
    }]
  },
  {
    name: '设置管理',
    name_en: 'setManage',
    route: '/setManage',
    auth: ['admin', 'procurement'],
    children: [
      {
        name: '用户管理',
        name_en: 'userManage',
        route: '/userManage',
        auth: ['admin'],
      },
      {
        name: '商品管理',
        name_en: 'commodityManage',
        route: '/commodityManage',
        auth: ['admin', 'procurement']
      },
      {
        name: '公告管理',
        name_en: 'announcementManage',
        route: '/announcementManage',
        auth: ['admin', 'procurement'],
        children: []
      }
    ]
  }
]

const routes = [{
  path: '/home/commodityList',
  component: CommodityList
},
{
  path: '/home/myOrder',
  component: MyOrder
},
{
  path: '/home/myInfo',
  component: MyInfo
},
{
  path: '/home/userManage',
  component: UserManage
},
{
  path: '/home/commodityManage',
  component: CommodityManage
},
{
  path: '/home/announcementManage',
  component: AnnouncementManage
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
                      <Link to={`/home${child.route}`}>
                        {child.name}
                      </Link>
                    </Menu.Item>)
                  })}
                </SubMenu>)
              } else {
                return (<Menu.Item key={item.name_en} >
                  <Link to={`/home${item.route}`}>
                    {item.name}
                  </Link>
                </Menu.Item>)
              }
            })}
          </Menu>
        </Col>
        <Col span={18}>
          {/* 右边内容 后期可考虑把路由写成一个组件引入*/}
          <Switch>
            <Route path="/home" exact>
              <Redirect to="/home/commodityList"></Redirect>
            </Route>
            {routes.map((item, index) =>
              (
                <Route key={index} path={item.path} exact>
                  <item.component />
                </Route>
              )
            )}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          <Car></Car>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
