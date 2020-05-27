/*
 * @Author: 24min
 * @Date: 2020-04-01 19:47:50
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-27 21:20:43
 * @Description: 公共请求方法的文件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { defaultConfig } from "../api/config"
import { dataType, isEmptyObject, isEmptyArray, keywordFormat, downloadFile } from "../common/tools"
import { Spin, notification } from 'antd';
import { useHistory } from "react-router-dom";

let num = 0
let token = localStorage.getItem('token') || ''
function showLoading(tip) {
    if (num === 0) {
        let dom = document.createElement('div')
        dom.setAttribute('id', 'loading')
        document.body.appendChild(dom)
        ReactDOM.render(<Spin tip={tip} size="large" />, dom)
    }
    num++
}
function hideLoading() {
    num--
    if (num === 0) {
        document.body.removeChild(document.getElementById('loading'))
    }
}
const callHttp = (url, method, requestParams = {}, customizeConfig = {}) => {
    method = method.toLowerCase();
    let resultConfig = { ...defaultConfig, ...customizeConfig }
    const httpInstance = axios.create({
        timeout: resultConfig.timeout,
        headers: {
            'Accept': 'application/json',
            'Content-Type': resultConfig.ContentType,
            'Authorization': token,
        },
        responseType: resultConfig.responseType
    })
    httpInstance.interceptors.request.use(request => {
        if (resultConfig.loading) {
            showLoading(resultConfig.loadingText)
        }
        if (!isEmptyObject(request.params)) {
            for (let key in request.params) {
                if (key === 'keyword' && method === 'get') {
                    request.params[key] = keywordFormat(request.params[key])
                }
                if (resultConfig.isAutoDeletEmpty) {
                    switch (dataType(request.params[key])) {
                        case 'array':
                            isEmptyArray(request.params[key]) && delete request.params[key];
                            break;
                        case 'object':
                            isEmptyObject(request.params[key]) && delete request.params[key];
                            break;
                        case 'number': break;
                        default:
                            !request.params[key] && delete request.params[key];
                            break;
                    }
                }
            }
        }
        return request
    })
    httpInstance.interceptors.response.use(response => {
        resultConfig.loading && hideLoading();
        return response
    }, error => {
        resultConfig.loading && hideLoading();
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
            notification.warning({
                message: `请求超时-${new Date()}`,
                description: `<div class="hx-break-en"><b>接口名称：</b>${error.config.url || '未知'}<br/><b>请求方法：</b>${error.config.method || '未知'}<br/><b>错误详情：</b>接口请求超时！</div>`,
                duration: null
            })
        } else {
            console.log('error1', error.response)
            if(error.response.status === 401){
                // let history = useHistory();
                // history.push('/login')
                localStorage.clear()
            }
            let errors = "";
            if (dataType(error.response.data, 'object')) {
                const key = ['message', 'error', 'exception']
                key.forEach((item, index) => {
                    if (error.response.data.hasOwnProperty(item)) {
                        errors += `${index + 1}、${error.response.data[item]}[<span style="color:red;">${item}</span>]。`
                    }
                })
            } else {
                errors = error.response.data
            }
            notification.warning({
                message: `${error.response.statusText || '未知错误'}(${error.response.status})`,
                description: `<div class="hx-break-en"><b>时间：</b>${new Date()}</b><br/><b>接口名称：</b>${error.response.config.url || '未知'}<br/><b>请求方法：</b>${error.response.config.method || '未知'}<br/><b>错误详情：</b>${errors}</div>`,
                duration: null,
            })

        }
        return Promise.reject(error)
    })
    return new Promise((resolve, reject) => {
        if (resultConfig.export) {
            /** 导出文件  get post请求*/
            if (['get', 'post'].includes(method)) {
                httpInstance[method](url, method === 'get' ? { params: requestParams } : requestParams, {
                    onDownloadProgress(progress) {
                        console.log(Math.round(progress.loaded / progress.total * 100) + '%');
                    }
                }).then(res => downloadFile(res.data, resultConfig.exportType, resultConfig.exportFileName)).catch(error => reject(error))
            } else {
                Notification({
                    title: '导出文件',
                    message: '导出文件只支持get和post',
                    type: 'warning',
                    duration: 0
                })
            }
        } else {
            if (method === 'post' || method === 'put') {
                httpInstance[method](url, requestParams).then(res => resolve(res.data)).catch(error => reject(error))
            } else {
                httpInstance[method](url, { [method === 'get' ? 'params' : 'data']: requestParams }).then(res => resolve(res.data)).catch(error => reject(error))
            }
        }
    })
}

export { callHttp }
