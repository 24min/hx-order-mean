/*
 * @Author: 24min
 * @Date: 2020-05-19 20:04:58
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-20 18:56:46
 * @Description: file content
 */
import React from 'react'
import { Result, Button } from 'antd'

export default class NoMatch extends React.PureComponent {
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
            // <h1>404 Not Found!<span role="img" aria-label="404">😔</span></h1>
        )
    }
} 