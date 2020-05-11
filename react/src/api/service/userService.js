/*
 * @Author: 24min
 * @Date: 2020-05-11 20:32:15
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-11 21:21:03
 * @Description: 用户模块前缀
 */
import { callHttp } from "../request"
import { productPrefix } from "../config"

/**获取用户列表 */
const getUserList = (params) => {
    return callHttp(`${productPrefix.userPrefix}/userList`, 'get', params)
}

export {
    getUserList
}