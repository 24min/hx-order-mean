/*
 * @Author: 24min
 * @Date: 2020-05-12 20:27:41
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-19 11:38:36
 * @Description: file content
 */
import React from 'react';
import { Menu, Row, Col } from 'antd'
import './home.scss';

function Home() {
  return (
    <div className="home">
      <Row>
        <Col span={6}>
          左导航
    </Col>
        <Col span={18}>
          右边内容
    </Col>
      </Row>
    </div>
  );
}

export default Home;
