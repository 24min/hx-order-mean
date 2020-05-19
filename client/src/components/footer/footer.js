/*
 * @Author: 24min
 * @Date: 2020-05-19 11:40:54
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-19 12:07:04
 * @Description: file content 底部组件
 */
import React from 'react'
import './footer.scss'

export default class Footer extends React.PureComponent {
    render() {
        return (
            <div className="footer">
                <h5>Copyright &copy; 24min</h5>
            </div>
        )
    }
}