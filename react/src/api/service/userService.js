/*
 * @Author: 24min
 * @Date: 2020-05-11 20:32:15
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-12 18:35:33
 * @Description: 用户模块前缀
 */
import { callHttp } from "../request"
import { productPrefix } from "../config"

/**获取用户列表 */
const getUserList = (params) => {
    return callHttp(`${productPrefix.userPrefix}/userList`, 'get', params)
}

/**注册用户 */
const addUser = (params) => {
    return callHttp(`${productPrefix.userPrefix}/register`, 'post',params)
}
export {
    getUserList,
    addUser
}