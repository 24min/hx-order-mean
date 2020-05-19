/*
 * @Author: 24min
 * @Date: 2020-05-19 11:40:54
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-19 19:45:20
 * @Description: file content 底部组件
 */
import React from 'react'
import './footer.scss'

export default class Footer extends React.PureComponent {
    render() {
        return (
            <div className="footer">
                <h5>Copyright &copy; 24min<span role="img" aria-label="run">🏃‍♂️</span></h5>
            </div>
        )
    }
}